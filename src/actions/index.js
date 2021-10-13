import { auth, provider } from "../firebase";

const signAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export default signAPI;
