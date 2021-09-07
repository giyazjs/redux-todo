import {combineReducers, createStore} from "redux";
import {TodoReducer} from "./TodoReducer";

const reducers = combineReducers({
    todo: TodoReducer,
})

export const store = createStore(reducers)

window.store = store
