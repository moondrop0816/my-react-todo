// redux store
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "../reducers/todoReducer";

const store = createStore(TodoReducer, applyMiddleware(thunk));

export default store;
