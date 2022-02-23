import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout as Startlogout } from "../redux/modules/auth";
import Add from "../components/Add";
import { BookReqType, RootState } from "../types";
import { goBack } from "connected-react-router";
import { addBook } from "../redux/modules/books";

export default function AddContainer() {
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(Startlogout());
  }, [dispatch]);
  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);
  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBook(book));
    },
    [dispatch]
  );
  return <Add logout={logout} loading={loading} back={back} add={add} />;
}
