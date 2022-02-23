import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSaga } from "../redux/modules/auth";

export default function SignContainer() {
  const dispatch = useDispatch();
  const login = useCallback(
    (reqdata) => {
      dispatch(loginSaga(reqdata));
    },
    [dispatch]
  );
  return <Signin login={login} />;
}
