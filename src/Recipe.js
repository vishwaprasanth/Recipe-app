import React from "react";
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients, dishType, mealType }) => {
     
    return(
        <div className="recipe">
            <h1 className="title">{title}</h1>
            <p>Calories: {calories}</p>
            <p>{dishType}</p>
            <p>{mealType}</p>
            <ol>
                {ingredients?.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;