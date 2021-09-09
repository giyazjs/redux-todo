import {ADD_TODO, SET_INPUT, SET_TODOS} from "./actionTypes";

export const setInput = (str) => ({
    type: SET_INPUT,
    payload: str
})
export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
})

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const fetchTodos = () => {
    return (dispatch) => {
       return fetch("https://60f11cb438ecdf0017b0fa27.mockapi.io/task")
            .then((res) => res.json())
            .then((data) => {
                dispatch(setTodos(data))
            })
    }
}

