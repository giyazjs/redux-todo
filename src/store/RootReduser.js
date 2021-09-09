import {applyMiddleware, combineReducers, createStore} from "redux";
import {TodoReducer} from "./TodoReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todo: TodoReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store
