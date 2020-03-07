import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return(
            <div className="ctctForm">
                <h4>Enter your contact data</h4>
                <form>
                    <input className="form-control mb-2" type="text" name="name" placeholder="Your name" />
                    <input className="form-control mb-2" type="email" name="email" placeholder="Your email" />
                    <input className="form-control mb-2" type="text" name="street" placeholder="Your street" />
                    <input className="form-control mb-2" type="text" name="postal" placeholder="Postal code" />
                    <Button btnType="btn-success">Finish Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;