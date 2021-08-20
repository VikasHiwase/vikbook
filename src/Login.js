import React from "react";
import "./Login.css";
import logo from "./img/socialNapp.PNG";
import loginLogo from "./img/vikbooklogo.PNG";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        // console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="logoImg" />
        <img src={loginLogo} alt="loginLogoImg" />
      </div>

      <Button type="submit" onClick={signIn}>
        Sing In
      </Button>
    </div>
  );
}

export default Login;
