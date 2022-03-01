import React from "react";
import { Redirect } from "react-router-dom";
import UseToken from "../hooks/UseToken";
import EditContainer from "../containers/EditContainer"

export default function Edit() {
  const token = UseToken();
  if(token === null) {
    return <Redirect to="/signin" />
  }

  return (
    <div>
      <EditContainer />
    </div>
  )
}