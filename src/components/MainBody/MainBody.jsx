import React from 'react';
import { useState } from 'react';
import Meals from '../Meals/Meals';
import Sidecart from '../SideCart/Sidecart';
import './MainBody.css'


const MainBody = () => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        console.log(item);
    }
    
    return (
        <div className='main-container container mx-auto flex gap-4 flex-col md:flex-row relative'>
            <Meals addToCart= {addToCart}></Meals>
            <Sidecart cartItems={cartItems}></Sidecart>
        </div>
    );
};

export default MainBody;