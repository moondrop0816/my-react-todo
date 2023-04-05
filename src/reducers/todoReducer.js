import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
} from "../actions";
import { initialState } from "./initialState";

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        loading: true,
        data: [],
        error: null,
      };
    case GET_TODOS_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case GET_TODOS_ERROR:
      return {
        loading: true,
        data: [],
        error: action.error,
      };
    case ADD_TODO:
      return {
        loading: true,
        data: [...state.data],
        error: null,
      };
    case ADD_TODO_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload],
        error: null,
      };
    case ADD_TODO_ERROR:
      return {
        loading: true,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default TodoReducer;
