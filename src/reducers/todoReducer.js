import { GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS } from "../actions";
import { initialState } from "./initialState";

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        todoData: {
          loading: true,
          data: [],
          error: null,
        },
      };
    case GET_TODOS_SUCCESS:
      return {
        todoData: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_TODOS_ERROR:
      return {
        todoData: {
          loading: true,
          data: [],
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default TodoReducer;
