import React from 'react';
import './Accessories.css';
import Button from '@mui/material/Button';
import list from '../data.json';
import Cards from '../Cards/Cards';


const Accessories = ({ handleClick }) => {

    // function DataCard(props) {
    //     const { headline, title, desc } = props;
    //     return (
    //         <div id='totalCard'>
    //             <div id='headCard'>
    //                 <h2 id="headline">{headline}</h2>
    //             </div>
    //             <div id="card">
    //                 <div id="content">
    //                     <h3 id="cardTitle">{title}</h3>
    //                     <p id="cardDesc">{desc}</p>
    //                     <Button id='btnCart'>Add Cart</Button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div id="container">
            <div id='section'>
                <h2>Cat part</h2>
            </div>
            <div id='cart-sec'>

                {
                    list.map((item) => (
                        <Cards key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>

            <div id='section'>
                <h2>Dog part</h2>
                
            </div>
        </div>
    );
};

export default Accessories;