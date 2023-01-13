import TextField from '@mui/material/TextField';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import Button from '@mui/material/Button';
import './Login.css';




const Login = () => {
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const [logEmail, setLogEmail] = useState({
        email: "",
        password: "",
    });

    const handleSubmission = () => {
    
        console.log(logEmail.email)
        var authErr = "";
        if (!logEmail.email || !logEmail.password) {
            setErrorMsg("Fill all fields");
            return;
        } else {
            signInWithEmailAndPassword(auth, logEmail.email, logEmail.password)
                .then(async (res) => {
                    const user = res.user;
                    await updateProfile(user, {
                        displayName: logEmail.email,
                    });

                    console.log("shuvo")
                    navigate("/adoption");
                })
                .catch((err) => {


                    console.log(authErr);
                    setErrorMsg(err.message);

                });

        }


    }





    return (
        <Form>

            <h3 id="log">Login</h3>

            {/* <label for="email">Email</label>
                <input type="text" id="email" onChange={(event) => setLogEmail((prev) => ({ ...prev, email: event.target.value }))} value={logEmail.email}></input>

                <label for="password">Password</label>
                <input type="password" id="password" onChange={(event) => setLogEmail((prev) => ({ ...prev, password: event.target.value }))} value={logEmail.password} ></input> */}
            <Form.Group className="mb-3">

                <TextField id="outlined-logemail" onChange={(event) => setLogEmail((prev) => ({ ...prev, email: event.target.value }))} size="small" label="Email" variant="outlined" />
            </Form.Group>

            <Form.Group className="mb-3">
                <TextField id="outlined-logpass" type="password" onChange={(event) => setLogEmail((prev) => ({ ...prev, password: event.target.value }))} size="small" label="Password" variant="outlined" />
            </Form.Group>


            <Button id="submit" onClick={handleSubmission}>Submit</Button>
            <b id="error">{errorMsg}</b>

        </Form>


    );
};

export default Login;