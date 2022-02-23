import { all } from "redux-saga/effects"
import { AuthSaga } from "./auth";
import { booksSaga } from "./books";

export default function* RootSaga() {
  yield all([AuthSaga(), booksSaga()]);
}
