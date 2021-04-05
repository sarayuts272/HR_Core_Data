import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT,
  TYPE
} from "../Constants";

const initialState = {
  result: null,
  error: false,
  isFetching: false,
  userType: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, error: false, result: null, userType: 1 };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, error: false, result: payload, userType: 1 };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, error: false, result: payload, userType: 1 };
    case TYPE:
      return { ...state, isFetching: false, error: false, result: payload, userType: payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
