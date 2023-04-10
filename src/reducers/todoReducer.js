import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  UPDATE_TARGET,
  UPDATE_TODO,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
} from "../actions";
import { initialState } from "./initialState";

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: true,
        data: state.data,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((el) => el.id !== action.id),
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_TARGET:
      return {
        ...state,
        loading: false,
        updateTarget: action.id,
      };
    case UPDATE_TODO:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((el) =>
          el.id === action.payload.id ? { ...el, ...action.payload } : el
        ),
        updateTarget: "",
      };
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default TodoReducer;
