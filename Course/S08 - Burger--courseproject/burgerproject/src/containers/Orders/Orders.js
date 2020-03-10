import React, { Component } from "react";
import Order from "../../components/Order/Order";

class Orders extends Component {
    render () {
        return(
            <div className="allOrders">
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;