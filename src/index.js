import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state - 1
        default:
            return state
    }
}

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
    type: INCREMENT_COUNTER
})
store.dispatch({
    type: DECREMENT_COUNTER
})



ReactDOM.render(<App />, document.getElementById('root'));