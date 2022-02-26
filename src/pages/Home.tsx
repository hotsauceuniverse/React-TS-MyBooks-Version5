import React from "react";
import { Redirect } from "react-router-dom";
import BookContainer from "../containers/BookContainer";
import UseToken from "../hooks/UseToken";

export default function Home() {
  const token = UseToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  
  return (
    <div>
      <h1>
        <BookContainer />
      </h1>
    </div>
  );
}
