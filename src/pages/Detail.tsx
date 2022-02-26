import React from "react";
import { Redirect } from "react-router-dom";
import UseToken from "../hooks/UseToken";
import DetailContainer from "../containers/DetailContainer";

export default function Detail() {
  const token = UseToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  
  return (
    <div>
      <DetailContainer />
    </div>
  );
}
