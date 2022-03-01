import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter // do nothing
        }
    }

    if (action.type === 'increasebyamount') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter // do nothing
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter // do nothing
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter // do nothing
        }
    }

    return state // do nothing
}

const store = createStore(counterReducer)

export default store
