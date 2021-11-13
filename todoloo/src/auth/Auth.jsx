import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth(props) {
  return (
    <div>
      <Route exact path="/auth/signup">
        <SignUp updateToken={props.updateToken} />
      </Route>
      <Route exact path="/auth/signin">
        <SignIn updateToken={props.updateToken} />
      </Route>
    </div>
  );
}
export default Auth;
