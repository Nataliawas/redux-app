import React from 'react';
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from './store/todos'

const TodoList = props => {
    const handleKeyPress = event => {
        if (event.which === 13) {
            const value = event.target.value
            props._handleTodoAdd(value)
        }
    }
    return (
        <div>
            <input onKeyPress={handleKeyPress} />
            {
                props._todos
                    ? props._todos.map(todo => {
                        return <div key ={todo.id}>
                            {todo.text}
                            <button type="button" onClick = {props._handleDelete(todo.id)}>X</button>
                        </div>
                    })
                    : <div>No todos on your list yet</div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    _todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    _handleTodoAdd: (todoText) => dispatch(addTodo(todoText)),
    _handleDelete: (todoId) =>dispatch(deleteTodo(todoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

