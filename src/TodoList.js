import React from 'react'

const TodoList = props => {

    return props.todos.map(todo => {
        return (
            <div>
                todo.text
            </div>
        )
    })
}