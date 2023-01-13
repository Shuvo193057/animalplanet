import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import Adoptions from "../AdoptionCard/AdoptionCard"
=======
import Adoptions from "../AdoptionCard/AdoptionCard";
>>>>>>> shuvo
import './Adoption.css';


const Adoption = ({ handleClick }) => {
    const [sd, setd] = useState([]);
    const getdetails = async () => {
        const response = await fetch('http://localhost:5000/adoption');
        const data = await response.json();
        setd(data)
       
        
        
    }
    useEffect(() => {
        getdetails()
    }, [])

    // setsdata(data);
    return (
        <div id="container">
<<<<<<< HEAD
            <div id='cart-sec'>
=======
            <div id='adop-sec'>
>>>>>>> shuvo
                {

                    sd.map((item) => (
                        <Adoptions key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );

};

export default Adoption;