import React from "react";

import { Redirect } from "react-router-dom";
import AddContainer from "../containers/AddContainer";
import UseToken from "../hooks/UseToken";

export default function Add() {
  const token = UseToken();
  if (token === null) {
    return <Redirect to="/sign" />;
  }
  return (
    <div>
      <AddContainer />
    </div>
  );
}
