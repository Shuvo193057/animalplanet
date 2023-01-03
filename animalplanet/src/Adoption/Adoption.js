import React, { useEffect, useState } from 'react';
import Adoptions from "../AdoptionCard/AdoptionCard"
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
            <div id='cart-sec'>
                {

                    sd.map((item) => (
                        <Adoptions key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );

};

export default Adoption;