import React from 'react';
import './Accessories.css';
import Button from '@mui/material/Button';
import Data from '../data.json';


const Accessories = () => {

    function DataCard(props) {
        const { headline, title, desc } = props;
        return (
            <div id='totalCard'>
                <div id='headCard'>
                    <h2 id="headline">{headline}</h2>
                </div>
                <div id="card">
                    <div id="content">
                        <h3 id="cardTitle">{title}</h3>
                        <p id="cardDesc">{desc}</p>
                        <Button id='btnCart'>Add Cart</Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="container" maxWidth="false">
            <div id='CatSec'>
                <div id='section'>
                    <h2>Cat part</h2>
                </div>
                <DataCard title={Data[0].titles} desc={Data[0].desc}></DataCard>
                <DataCard title={Data[1].titles} desc={Data[1].desc}></DataCard>
                <DataCard title={Data[2].titles} desc={Data[2].desc}></DataCard>
                <DataCard title={Data[3].titles} desc={Data[3].desc}></DataCard>
                <DataCard title={Data[3].titles} desc={Data[3].desc}></DataCard>
            </div>
            <div id='section'>
                <h2>Dog part</h2>
                <DataCard title={Data[0].titles} desc={Data[0].desc}></DataCard>
                <DataCard title={Data[1].titles} desc={Data[1].desc}></DataCard>
                <DataCard title={Data[2].titles} desc={Data[2].desc}></DataCard>
                <DataCard title={Data[2].titles} desc={Data[2].desc}></DataCard>
            </div>
        </div>
    );
};

export default Accessories;