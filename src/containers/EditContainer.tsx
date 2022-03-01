import React from "react";
import Signin from "../components/Signin";
import { login } from "../redux/modules/auth";

export default function EditContainer() {
  return <Signin login={login} />
}