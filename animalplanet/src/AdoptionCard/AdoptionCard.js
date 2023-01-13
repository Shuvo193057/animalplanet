import React from 'react';
import './AdoptionCard.css'

const AdoptionCard = ({ item, handleClick }) => {
    return (
        <div id='cards'>
            <div id='image_box'>
<<<<<<< HEAD
                <img src={item.image} alt="shuvo" />
                <p id='title-sec'></p>
            </div>
            <div id='details'>
                <p id="trainname">Pet Name: {item.petname}</p>
=======
                <img src={item.image} alt="image" />
                <p id='title-sec'></p>
            </div>
            <div id='details'>
                <p id="trainname"> {item.petname}</p>
>>>>>>> shuvo
                <p>Breed: {item.breed}</p>
                <p>Color: {item.colour}</p>
                <button id='card-btn' onClick={() => handleClick(item)}> Add cart</button>
            </div>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> shuvo
    );
};

export default AdoptionCard;