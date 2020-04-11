import React from "react";

const input = (props) => {

    let inputElement = null;
    const inputClasses = ["form-control"];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('is-invalid');
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.changed} />;
            break;
        case ('email'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = (
                <textarea
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    defaultValue={props.value}
                    onChange={props.changed}>
                </textarea>
            );
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    defaultValue={props.value}
                    onChange={props.changed}>
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
                defaultValue={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="form-group">
            <label>The label</label>
             {inputElement}
        </div>
    )
};

export default input;