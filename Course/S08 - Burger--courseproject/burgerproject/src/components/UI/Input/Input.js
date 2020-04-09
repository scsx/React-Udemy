import React from "react";

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                defaultValue={props.value} />;
            break;
        case ('email'):
            inputElement = <input
                className="form-control"
                {...props.elementConfig}
                defaultValue={props.value} />;
            break;
        case ('textarea'):
            inputElement = (
                <textarea
                    className="form-control"
                    {...props.elementConfig}
                    defaultValue={props.value}>
                </textarea>
            );
            break;
        case ('select'):
            inputElement = (
                <select
                    className="form-control"
                    defaultValue={props.value}>
                        {
                        props.elementConfig.options.map(option => (
                            <option key={option.value} defaultValue={option.value}>{option.displayValue}</option>
                        ))
                        }
                </select>
            );
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                className="noTypeFound"
                defaultValue={props.value} />;
    }

    return (
        <div className="form-group">
            <label>The label</label>
             {inputElement}
        </div>
    )
};

export default input;