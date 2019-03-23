import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { inc, dec } from './store/counter'
import counterReducer from './store/counter'


const store = createStore(
    combineReducers({
        counter: counterReducer
    }),
   
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())



ReactDOM.render(<App />, document.getElementById('root'));
