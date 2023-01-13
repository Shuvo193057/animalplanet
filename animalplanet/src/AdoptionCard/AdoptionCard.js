import React from 'react';
import './AdoptionCard.css'

const AdoptionCard = ({ item, handleClick }) => {
    return (
        <div id='cards'>
            <div id='image_box'>
                <img src={item.image} alt="image" />
                <p id='title-sec'></p>
            </div>
            <div id='details'>
                <p id="trainname"> {item.petname}</p>
                <p>Breed: {item.breed}</p>
                <p>Color: {item.colour}</p>
                <button id='card-btn' onClick={() => handleClick(item)}> Add cart</button>
            </div>
        </div>
    );
};

export default AdoptionCard;