import React from 'react';

const Meal = ({ meal }) => {
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={meal.strCategoryThumb} alt="meal" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{meal.strCategory}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;