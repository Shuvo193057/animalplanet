import React, { useEffect, useState } from 'react';
import AccessoriesCard from '../AccessoriesCard/AccessoriesCard';
<<<<<<< HEAD
=======
import Cards from '../Cards/Cards';
>>>>>>> shuvo
import './Accessories.css';


const Accessories = ({ handleClick }) => {
    const [accdata, setaccdata] = useState([]);
    const getdetails = async () => {
        const response = await fetch('http://localhost:5000/accessories');
        const data = await response.json();
        setaccdata(data)
<<<<<<< HEAD
       
        
        
    }
    useEffect(() => {
        getdetails()
    }, [])

    // setsdata(data);
    return (
        <div id="container">
            <div id='cart-sec'>
                {

=======



    }
    useEffect(() => {
        getdetails()
    }, [])

    // setsdata(data);
    return (
        <div id="container">
            <div id='acce-sec'>
                {
>>>>>>> shuvo
                    accdata.map((item) => (
                        <AccessoriesCard key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );

};

export default Accessories;