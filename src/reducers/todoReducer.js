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
        loading: true,
        data: [],
        error: null,
        updateTarget: 0,
      };
    case GET_TODOS_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
        updateTarget: 0,
      };
    case GET_TODOS_ERROR:
      return {
        loading: true,
        data: [],
        error: action.error,
        updateTarget: 0,
      };
    case ADD_TODO:
      return {
        loading: true,
        data: state.data,
        error: null,
        updateTarget: 0,
      };
    case ADD_TODO_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload],
        error: null,
        updateTarget: 0,
      };
    case ADD_TODO_ERROR:
      return {
        loading: true,
        data: [],
        error: action.error,
        updateTarget: 0,
      };
    case DELETE_TODO:
      return {
        loading: true,
        data: state.data,
        error: null,
        updateTarget: 0,
      };
    case DELETE_TODO_SUCCESS:
      return {
        loading: false,
        data: state.data.filter((el) => el.id !== action.id),
        error: null,
        updateTarget: 0,
      };
    case DELETE_TODO_ERROR:
      return {
        loading: true,
        data: [],
        error: action.error,
        updateTarget: 0,
      };
    case UPDATE_TARGET:
      return {
        loading: false,
        data: state.data,
        error: null,
        updateTarget: action.id,
      };
    case UPDATE_TODO:
      return {
        loading: true,
        data: state.data,
        error: null,
        updateTarget: 0,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        loading: false,
        data: state.data.map((el) =>
          el.id === action.payload.id ? { ...el, ...action.payload } : el
        ),
        error: null,
        updateTarget: "",
      };
    case UPDATE_TODO_ERROR:
      return {
        loading: true,
        data: [],
        error: action.error,
        updateTarget: 0,
      };
    default:
      return state;
  }
};

export default TodoReducer;
