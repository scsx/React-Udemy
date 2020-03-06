import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import "./css/App.css";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
    render() {
        return (
            <div className="allRoutes">
                <Layout>
                    <Switch>
                        <Route path="/" exact component={BurgerBuilder}/>
                        <Route path="/checkout" component={Checkout}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
