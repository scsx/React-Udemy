import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const buildControls = (props) => (
    <div className="allcontrols">
        <ul className="controls list-group-horizontal list-group">
            {controls.map((ctrl) => (
                <BuildControl
                    key={ctrl.label}
                    ingName={ctrl.label}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    added={() => props.ingredientAdded(ctrl.type)}
                    disabledProp2={props.disabledProp[ctrl.type]}
                />
            ))}
            <li className="price list-group-item">
                {props.price.toFixed(2)}
                <small>$</small>
            </li>
        </ul>
        <div className="order">
            <button
                className="btn btn-success"
                disabled={!props.purchasable}
                onClick={props.ordered}>
                Order now
            </button>
        </div>
    </div>
);

export default buildControls;
