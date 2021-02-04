import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          // The key must be an unique string among your ingredients
          <li key={`${ingredient.text}-${index}`}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
