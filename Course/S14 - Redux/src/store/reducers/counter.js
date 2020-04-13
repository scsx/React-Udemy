import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.INCREMENT:
            // a clone state object, so we dont change it, with Object.assign (not deep clone, array results: [] won't be new)
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            console.log(newState);
            return  newState;
        case actionTypes.DECREMENT:
            // or
            // b RECOMMENDED WAY - clone state object with spread operator array results: [] is untouched
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.myValue
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.myValue
            }
    }
    return state;
}

export default reducer;