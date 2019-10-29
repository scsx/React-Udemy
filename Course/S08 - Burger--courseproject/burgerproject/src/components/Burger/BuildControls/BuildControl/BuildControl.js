import React from "react";

const buildControl = (props) => (
    <li className="control list-group-item">
        <h5 className="mb-2">{props.ingName}</h5>
        <div className="btn-group">
            <button className="btn btn-primary" onClick={props.added}>
                &#43;
            </button>
            <button
                className="btn btn-outline-danger"
                onClick={props.removed}
                disabled={props.disabledProp2}>
                &#8211;
            </button>
        </div>
    </li>
);

export default buildControl;
