import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
            useEffect( () =>{
                fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then(res => res.json())
                .then (data => setMeals(data.categories))
            }, []);
    return (
        <div className='md:w-3/5 w-full grid grid-cols-2 gap-2 mt-5'>
            {
                meals.map(meal=> <Meal 
                    meal ={meal}
                    key= {meal.idCategory}
                    ></Meal>)
            }
        </div>
    );
};

export default Meals;