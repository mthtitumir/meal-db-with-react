import React from 'react';

const Meal = (props) => {
    // console.log(props);
    const {strCategoryThumb, strCategory} = props.meal;
    const {addToCart} = props;

    
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={strCategoryThumb} alt="meal" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>addToCart(props.meal)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Meal;