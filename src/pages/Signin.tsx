import React from "react";
import { Redirect } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import UseToken from "../hooks/UseToken";

export default function Signin() {
  const token = UseToken();
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
}
