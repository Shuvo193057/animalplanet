import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import axios from 'axios';

const Register = () => {

    const navigate = useNavigate();
    const [regPanel, setRegPanel] = useState({
        username: "",
        email: "",
        address: "",
        phone:"",
        password: "",
        confirmPassword: "",       
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

    const registerSubmission = () => {
        var authErr = "";
        if (!regPanel.username || !regPanel.email || !regPanel.address || !regPanel.password || !regPanel.confirmPassword) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitBtnDisabled(true);

        createUserWithEmailAndPassword(auth, regPanel.email, regPanel.password)
            .then(async (res) => {
                setSubmitBtnDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: regPanel.username,
                });
                navigate("/Login");
            })
            .catch((err) => {
                authErr = err.message;
                console.log(authErr);
                setSubmitBtnDisabled(false);
                setErrorMsg(err.message);
            });
        if (authErr === "") {
            axios.post('http://localhost:5000/Register/postData', regPanel).then(respose => {
                console.log(respose)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <body>
           

            <section id='A'>
                <form className="RegisterForm" action="/registeruser" method="post">
                    <h3>Register</h3>

                    <label for="username">Username</label>
                    <input type="text" id="username" onChange={(event) => setRegPanel((prev) => ({ ...prev, username: event.target.value }))} value={regPanel.username}></input>

                    <label for="Email">Email</label>
                    <input type="email" id="email" onChange={(event) => setRegPanel((prev) => ({ ...prev, email: event.target.value }))} value={regPanel.email}></input>

                    <label for="Address">Address</label>
                    <input type="text" id="address" onChange={(event) => setRegPanel((prev) => ({ ...prev, address: event.target.value }))} value={regPanel.address}></input>

                    <label for="Phone Number">Phone Number</label>
                    <input type="text" id="phone" onChange={(event) => setRegPanel((prev) => ({ ...prev, phone: event.target.value }))} value={regPanel.phone}></input>

                    <label for="password">Password</label>
                    <input type="password" id="password" onChange={(event) => setRegPanel((prev) => ({ ...prev, password: event.target.value }))} value={regPanel.password}></input>

                    <label for="Confirm Password">Confirm Password</label>
                    <input type="password" id="confirmPassword" onChange={(event) => setRegPanel((prev) => ({ ...prev, confirmPassword: event.target.value }))} value={regPanel.confirmPassword}></input>

                    <button id="submit" onClick={registerSubmission} disabled={submitBtnDisabled}>Register</button>
                    <p>Already Have an Account?<a href='Login'>Login</a></p>
                    <b id="error">{errorMsg}</b>

                </form>
            </section>

        </body>

    );
};

export default Register;