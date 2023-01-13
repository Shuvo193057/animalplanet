import React, { useEffect, useState } from 'react';
import AccessoriesCard from '../AccessoriesCard/AccessoriesCard';
import Cards from '../Cards/Cards';
import './Accessories.css';


const Accessories = ({ handleClick }) => {
    const [accdata, setaccdata] = useState([]);
    const getdetails = async () => {
        const response = await fetch('http://localhost:5000/accessories');
        const data = await response.json();
        setaccdata(data)



    }
    useEffect(() => {
        getdetails()
    }, [])

    // setsdata(data);
    return (
        <div id="container">
            <div id='acce-sec'>
                {
                    accdata.map((item) => (
                        <AccessoriesCard key={item.id} item={item} handleClick={handleClick} />
                    ))}
            </div>
        </div>
    );

};

export default Accessories;