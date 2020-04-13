// ! NONE OF THIS IS WORKING

import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // DONT USE push(), concat() returns a new array
                results: state.results.concat({id: new Date().getTime(), value: state.res})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;