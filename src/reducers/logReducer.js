import {
  GET_LOGS,
  ADD_LOGS,
  DELETE_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    case ADD_LOGS:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };

    case DELETE_LOGS:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    default:
      return state;
  }
};

export default logReducer;
