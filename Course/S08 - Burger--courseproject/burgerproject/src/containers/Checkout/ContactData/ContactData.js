import React, {Component} from "react";
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    // this data will create the inputs dynamically
    // This object has objects inside so it can't be deep cloned with {...this.state.orderForm} in inputChangedHandler
    // Example: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8156740#overview
    // Theory: https://www.notion.so/scsx/Primitives-vs-Objects-Value-vs-Reference-types-f474ee9279704c2facf96f0eb517ea3c#23f23eab3b2342fba18ed820e6163d15
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 9
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest (+5$)'
                        }, {
                            value: 'cheapest',
                            displayValue: 'Normal'
                        }
                    ]
                },
                value: 'cheapest',
                valid: true, // to simplify, the select can't be invalid
                touched: false,
                validation: {}, // the same, so that validation exists
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        // new object to be sent
        const formData = {};
        for (let formElId in this.state.orderForm) {
            formData[formElId] = this.state.orderForm[formElId].value;
        }
        const orderObj = {
            ingredients: this.state.ingredients,
            price: this.state.price, // in a real app we'd set the price in the server; values should be there and the client couldn't manipulate it
            orderData: formData
        };
        // /orders doesnt exist yet in Firebase; there, a orders node will be created
        // ending in .json is also Firebase specific
        axios
            .post("/orders.json", orderObj)
            .then((response) => {
                this.setState({loading: false});
                this
                    .props
                    .history
                    .push('/');
            })
            .catch((error) => {
                console.log(error);
                this.setState({loading: false});
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValidCopy = true;
        for (let inputId in updatedOrderForm) {
            formIsValidCopy = updatedOrderForm[inputId].valid && formIsValidCopy;
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValidCopy });

    }

    render() {

        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
            
                {formElementsArray.map(formEl => (
                    <Input
                        key={formEl.id}
                        elementType={formEl.config.elementType}
                        elementConfig={formEl.config.elementConfig}
                        value={formEl.config.value}
                        invalid={!formEl.config.valid}
                        shouldValidate={formEl.config.validation}
                        touched={formEl.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formEl.id)}
                    />
                ))}

                <Button btnType="btn-success mt-2" clicked={this.orderHandler} disabled={!this.state.formIsValid}>Finish Order</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div className="ctctForm">
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;