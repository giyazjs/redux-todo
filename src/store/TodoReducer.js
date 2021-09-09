import {ADD_TODO, SET_INPUT, SET_TODOS} from "./actionTypes";

const initialState = {
    input: "",
    todos: [],
}

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT:
            return {...state, input: action.payload}
        case SET_TODOS:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return {...state}
    }
}