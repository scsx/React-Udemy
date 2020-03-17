import React from "react";

const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]});
    }

    const ingredientOutput = ingredients.map(ig => {
        return <li className="list-group-item" key={ig.name}>{ig.name} - {ig.amount}</li>
    });

    return (
        <div className="card order">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.keyAsName}</h5>
                <p className="card-text">USD {Number.parseFloat(props.price).toFixed(2)}</p>
                <ul className="list-group list-group-flush">
                    {ingredientOutput}
                </ul>
            </div>
        </div>
    );
}

export default order;