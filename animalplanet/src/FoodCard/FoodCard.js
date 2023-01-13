import React from 'react';
import './FoodCard.css'

const FoodCard = ({ item, handleClick }) => {
    return (
        <div id='cards'>
            <div id='image_box'>
                <img src={item.image} alt="image" />
                <p id='title-sec'></p>
            </div>
            <div id='details'>
                <p id="trainname"> {item.foodname}</p>
                <p>Pet type: {item.pettype}</p>
                <p>Price: {item.price}</p>
                <button id='card-btn' onClick={() => handleClick(item)}> Add cart</button>
            </div>
        </div>
    );
};

export default FoodCard;