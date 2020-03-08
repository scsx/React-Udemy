import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const orderObj = {
            ingredients: this.state.ingredients,
            // in a real app we'd set the price in the server; values should be there and also the client couldn't manipulate it
            price: this.state.price,
            deliveryMethod: "fastest",
            customer: {
                name: "Brooklyn Kelly",
                address: {
                    street: "3451 Groveland Terrace",
                    zipCode: "Minneapolis, MN 55403",
                    country: "EUA"
                },
                email: "brooklyn.kelly@example.com"
            }
        };
        // /orders doesnt exist yet in Firebase; there a orders node will be created
        // ending in .json is also Firebase specific
        axios
            .post("/orders.json", orderObj)
            .then((response) => {
                console.log(response);
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className="form-control mb-2" type="text" name="name" placeholder="Your name" />
                <input className="form-control mb-2" type="email" name="email" placeholder="Your email" />
                <input className="form-control mb-2" type="text" name="street" placeholder="Your street" />
                <input className="form-control mb-2" type="text" name="postal" placeholder="Postal code" />
                <Button btnType="btn-success" clicked={this.orderHandler}>Finish Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return(
            <div className="ctctForm">
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;