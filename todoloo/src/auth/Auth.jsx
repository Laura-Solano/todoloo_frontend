import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
  return (
    <div>
      <Route exact path="/auth/signup">
        <SignUp />
      </Route>
      <Route exact path="/auth/signin">
        <SignIn />
      </Route>
    </div>
  );
}
export default Auth;
