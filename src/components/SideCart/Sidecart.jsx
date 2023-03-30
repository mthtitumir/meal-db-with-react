import { React, useState } from 'react';

const Sidecart = ({cartItems}) => {

    return (
        <div className='md:w-2/5 w-full'>
            <div className='bg-red-700   mt-5 sticky top-0 right-0 left-0'>
                <h1 className='text-white text-center mt-2 text-xl '>Meal Details</h1>
                <div>
                    {
                    cartItems.map((item) => (
                        <div className='text-3xl text-white font-semibold border rounded p-5'>{item.strCategory}</div>
                    ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Sidecart;