import React, { useEffect, useState } from 'react';
import './AddCart.css';

const AddCart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount + item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    })
    return (
        <article>

            {cart.map((item) => (
                <div id='cart_box' key={item.id}>
                    <div id='cart_img'>
                        <img src={item.img} alt=""></img>
                        <p>{item.title}</p>
                    </div>
                    {/* <div>
                        <button onClick={() => handleChange(item, 1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div> */}
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))};

            <div id='total'>
                <span>Total price of cart</span>
                <span>TK - {price}</span>
            </div>
        </article>
    );
};

export default AddCart;