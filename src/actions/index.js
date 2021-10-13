import { authorization, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const signAPI = () => {
  return (dispatch) => {
    authorization
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    authorization.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    authorization
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        alert(err.message);
      }) ;
  };
};
