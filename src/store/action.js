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
