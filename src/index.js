import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { inc, dec } from './store/counter'
import counterReducer from './store/counter'
import todosReducer, { addTodo, toggleTodo, deleteTodo } from './store/todos';
import { Provider } from 'react-redux'

const store = createStore(
    combineReducers({
        todos: todosReducer,
        counter: counterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
    type: 'ADD_TODO',
    text: 'Go  shopping',
})

store.dispatch({
    type: 'ADD_TODO',
    text: 'Go  to work',
})

store.dispatch(addTodo('go for a walk'))

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
window.addTodo = text => store.dispatch(addTodo(text))
window.deleteTodo = () => store.dispatch(deleteTodo())
window.toggleTodo = () => store.dispatch(toggleTodo())


ReactDOM.render(
    <Provider store={store} ><App /></Provider>, document.getElementById('root'));
