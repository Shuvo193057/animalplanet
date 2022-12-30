import React from 'react';
import './Cards.css'

const Cards = ({ item, handleClick }) => {
    const { titles, desc, img, price } = item;
    return (
        <div id='cards'>
            <div id='image_box'>
                <img src={img} alt="" />
                <p id='title-sec'></p>
            </div>
            <div id='details'>
                <p>{titles}</p>
                <p>{desc}</p>
                <p>{price}</p>
                <button id='card-btn' onClick={() => handleClick(item)}> Add cart</button>
            </div>
        </div>
    );
};

export default Cards;