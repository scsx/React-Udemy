import React, {Component} from "react";
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    // this data will create the inputs dynamically
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: ''
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
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const orderObj = {
            ingredients: this.state.ingredients,
            // in a real app we'd set the price in the server; values should be there and
            // also the client couldn't manipulate it
            price: this.state.price
        };
        // /orders doesnt exist yet in Firebase; there a orders node will be created
        // ending in .json is also Firebase specific
        axios
            .post("/orders.json", orderObj)
            .then((response) => {
                console.log(response);
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

    render() {

        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form>
            
                {formElementsArray.map(formEl => (
                    <Input
                        key={formEl.id}
                        elementType={formEl.config.elementType}
                        elementConfig={formEl.config.elementConfig}
                        value={formEl.config.value}
                    />
                ))}

                <Button btnType="btn-success mt-2" clicked={this.orderHandler}>Finish Order</Button>
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