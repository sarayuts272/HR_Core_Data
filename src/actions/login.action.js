import {
  LOGIN_FETCHING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./../Constants";
export const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setStateToField = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const setStateToLogout = () => ({
  type: LOGOUT,
});

export const login = ({ username, password, history }) => {
  return (dispatch) => {
    dispatch(setStateToFetching);
    setTimeout(() => {
      dispatch(setStateToSuccess("ok"));
      history.push("/keyaddition")
    }, 2000);
  };
};

export const logout = ({history}) => {
  return dispatch => {
    dispatch(setStateToLogout())
    history.push("/")
  }
}
