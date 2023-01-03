import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Training.css';


const Training = ({ handleClick }) => {
    const [sdata, setsdata] = useState([]);
    const getdetails = async () => {
        const response = await fetch('http://localhost:5000/trainning');
        const data = await response.json();
        setsdata(data)
       
        
        
    }
    useEffect(() => {
        getdetails()
    }, [])

    // setsdata(data);
    return (
        <div id="container">
            <div id='cart-sec'>
                {

                    sdata.map((item) => (
                        <Cards key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );

};

export default Training;