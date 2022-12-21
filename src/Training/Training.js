import React from 'react';
import './Training.css';
import Dog from '../Resources/dogs.jpg';

const Training = () => {
    return (


        // <div classNamne="card">
        //     <img src={Dog} id="dogi" alt='dogs'></img>
        //     {/* {<img src="./dogs.jpg" alt="dogs.jpg" ></img> */}
        //     <h1>Tailored Jeans</h1>
        //     <p class="price">$19.99</p>
        //     <p>Some text about the jeans..</p>
        //     <p><button>Add to Cart</button></p> F
        // </div>
        <div id='card'>
            <div id='train-card'>
                <div id='tran-img'>
                <img src={Dog} alt="dogs"></img>
                </div>
                <div id='train-text'>
                    <p>John Walter</p>
                    <p>Shepard Trainer</p>
                    

                   
                </div>
            </div>
        </div>


    );

};

export default Training;