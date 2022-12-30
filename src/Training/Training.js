import React from 'react';
import './Training.css';
import list from '../data.json';
import Cards from '../Cards/Cards';


const Training = ({ handleClick }) => {
    return (
        <div id='cart-sec'>
            {
                list.map((item) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                ))}
        </div>
    );

};

export default Training;