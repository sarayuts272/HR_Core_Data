import {
  LOGIN_FETCHING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  TYPE,
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

export const SetStateToType = (payload) => ({
  type: TYPE,
  payload
});

export const login = ({ username, password, history }) => {
  return (dispatch) => {
    dispatch(setStateToFetching);
    setTimeout(() => {
      dispatch(setStateToSuccess("ok"));
      if (username === "type1") {
        dispatch(SetStateToType("1"));
        alert(username)
        history.push("/career");
      } 
      if (username === "type2") {
        
        dispatch(SetStateToType("2"));
        alert(username)
        history.push("/career");
      }
      if (username === "type3") {
        
        dispatch(SetStateToType("3"));
        alert(username)
        history.push("/showdata");
      }

    }, 2000);
  };
};

export const logout = ({ history }) => {
  return (dispatch) => {
    dispatch(setStateToLogout());
    history.push("/");
  };
};
