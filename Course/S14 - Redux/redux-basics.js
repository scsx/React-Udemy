const myRedux = require('redux');
const myCreateStore = myRedux.createStore;
const myInitialState = {
    counter: 0
}
// REDUCER
const myReducer = (state = myInitialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.myValue
        }
    }
    return state;
};

// STORE
const myStore = myCreateStore(myReducer);

// DISPATCHING ACTIONS
myStore.dispatch({type: 'INC_COUNTER'});
myStore.dispatch({type: 'ADD_COUNTER', myValue: 10});
console.log(myStore.getState());

// SUBSCRIPTION