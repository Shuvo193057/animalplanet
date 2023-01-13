import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './Food.css';


const Food = ({ handleClick }) => {
    const [foodata, setfoodata] = useState([]);
    const getdetails = async () => {
        const response = await fetch('http://localhost:5000/food');
        const data = await response.json();
        setfoodata(data)
       
        
        
    }
    useEffect(() => {
        getdetails()
    }, [])

    // setsdata(data);
    return (
        <div id="container">
            <div id='food-sec'>
                {

                    foodata.map((item) => (
                        <FoodCard key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );

};

export default Food;