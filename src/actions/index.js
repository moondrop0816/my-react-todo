import axios from "axios";

const url = "http://localhost:3001/todos";

// action types
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

export const UPDATE_TARGET = "UPDATE_TARGET";

export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_ERROR = "UPDATE_TODO_ERROR";

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
    const { data } = await axios.get(url);
    dispatch({ type: GET_TODOS_SUCCESS, data });
  } catch (e) {
    dispatch({ type: GET_TODOS_ERROR, error: e });
  }
};

export const addTodo = (payload) => async (dispatch) => {
  // 요청 시작
  dispatch({ type: ADD_TODO });
  try {
    axios.post(url, payload);
    dispatch({ type: ADD_TODO_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: ADD_TODO_ERROR, error: e });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  // 요청 시작
  dispatch({ type: DELETE_TODO });
  try {
    axios.delete(`${url}/${id}`);
    dispatch({ type: DELETE_TODO_SUCCESS, id });
  } catch (e) {
    dispatch({ type: DELETE_TODO_ERROR, error: e });
  }
};

export const updateTarget = (id) => async (dispatch) => {
  dispatch({ type: UPDATE_TARGET, id });
};

export const updateTodo = (payload) => async (dispatch) => {
  // 요청 시작
  dispatch({ type: UPDATE_TODO });
  try {
    axios.patch(`${url}/${payload.id}`);
    dispatch({ type: DELETE_TODO_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: DELETE_TODO_ERROR, error: e });
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
