let id = 0
const ADD_TODO = 'ADD_TODO'
export const addTodo = text => ({
    type: ADD_TODO,
    text
})

const todosReducer = ( state=[], action ) => {

    switch (action.type) {

        case ADD_TODO:
            id++
            const newTodo = {
                text: action.text,
                isCompleted: false,
                id
            }
            return [
                ...state,
                newTodo
            ]
        default:
            return state
    }
}

export default todosReducer