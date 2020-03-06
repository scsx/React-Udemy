import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"; // lowercase w because we wont use it in JSX:
import axiosInstance from "../../axios-orders";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null, // get from server
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axiosInstance
            .get("/ingredients.json")
            .then((response) => {
                this.setState({ ingredients: response.data });
            })
            .catch((error) => {
                this.setState({ error: true });
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients); // arg because state was outdated
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // if we have 0 ing error would be thrown
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients); // arg because state was outdated
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };
    purchaseContinueHandler = () => {
        /*
        this.setState({ loading: true });
        const orderObj = {
            ingredients: this.state.ingredients,
            // in a real app we'd set the price in the server; values should be there and also the client couldn't manipulate it
            price: this.state.totalPrice,
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
                this.setState({ loading: false, purchasing: false });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false, purchasing: false });
            });
            */
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    render() {
        const disabledButtons = {
            ...this.state.ingredients
        };
        for (let key in disabledButtons) {
            disabledButtons[key] = disabledButtons[key] <= 0; // return true/false for the copied object disabledButtons
        }

        // set default html
        let orderSummary = null;
        let burgerStuff = this.state.error ? (
            <p>Ingredients can't be loaded</p>
        ) : (
            <Spinner />
        );
        // see if we get stuff from server
        if (this.state.ingredients) {
            burgerStuff = (
                <Aux>
                    <div className="burgerbuilder">
                        <Burger ingredients={this.state.ingredients} />
                    </div>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabledProp={disabledButtons}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                />
            );
        }
        // waiting for stuff from server
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal
                    showModal={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burgerStuff}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
