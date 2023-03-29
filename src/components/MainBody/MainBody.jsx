import React from 'react';
import Meals from '../Meals/Meals';
import Sidecart from '../SideCart/Sidecart';
import './MainBody.css'


const MainBody = () => {
    return (
        <div className='main-container container mx-auto flex gap-4 flex-col md:flex-row'>
            <Meals></Meals>
            <Sidecart></Sidecart>
        </div>
    );
};

export default MainBody;