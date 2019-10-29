import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // Object to array, etc: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8109018
    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Add your ingredients</p>;
    }

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
