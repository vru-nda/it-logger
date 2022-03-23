import {
  GET_LOGS,
  ADD_LOGS,
  SET_LOADING,
  DELETE_LOGS,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//add new log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//update logs on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//delete logs from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOGS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// set current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//set loading true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
