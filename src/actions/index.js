import axios from "axios";

// action types
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const FILTER_ALL = "FILTER_ALL";
export const FILTER_UNDONE = "FILTER_UNDON";
export const FILTER_DONE = "FILTER_DONE";

export const DELETE_ALL = "DELETE_ALL";
export const DELETE_DONE = "DELETE_DONE";

// actions creator functions
export const getTodos = () => async (dispatch) => {
  // 요청 시작
  dispatch({ type: GET_TODOS });
  try {
    const { data } = await axios.get("http://localhost:3001/todos");
    dispatch({ type: GET_TODOS_SUCCESS, data });
  } catch (e) {
    dispatch({ type: GET_TODOS_ERROR, error: e });
  }
};

export const addTodo = () => async (dispatch) => {
  // 요청 시작
  dispatch({ type: ADD_TODO });
  try {
    const { data } = await axios.get("http://localhost:3001/todos");
    dispatch({ type: ADD_TODO_SUCCESS, data });
  } catch (e) {
    dispatch({ type: ADD_TODO_ERROR, error: e });
  }
};

// thunk 예시
// const getComments = () => async (dispatch, getState) => {
//   const id = getState().post.activeId;
//   dispatch({ type: 'GET_COMMENTS' });
//   try {
//     const comments = await api.getComments(id);
//     dispatch({ type:  'GET_COMMENTS_SUCCESS', id, comments });
//   } catch (e) {
//     dispatch({ type:  'GET_COMMENTS_ERROR', error: e });
//   }
// }

// export const notify = (message, dismissTime = 5000) => dispatch => {
//   const uuid = Math.random()
//   dispatch(enqueueNotification(message, dismissTime, uuid))
//   setTimeout(() => {
//     dispatch(dequeueNotification())
//   }, dismissTime)
// }
