import React from 'react';
import './Cards.css'

const Cards = ({ item, handleClick }) => {
    return (
        <div id='cards'>
            <div id='image_box'>
                <img src={item.Image} alt="shuvo" />
                <p id='title-sec'></p>
            </div>
            <div id='details'>
                <p id="trainname">Trainer Name: {item.Name}</p>
                <p>Pet type: {item.Speciality}</p>
                <p>Fees: {item.Fees}</p>
                <button id='card-btn' onClick={() => handleClick(item)}> Add cart</button>
            </div>
        </div>
    );
};

export default Cards;