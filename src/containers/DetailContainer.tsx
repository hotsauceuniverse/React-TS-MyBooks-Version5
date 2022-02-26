import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout as Startlogout } from "../redux/modules/auth";
import { editData } from "../redux/modules/books";
import { BookReqType, RootState } from "../types";
import { goBack } from "connected-react-router";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";

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

  const Edit = useCallback(
    (book: BookReqType) => {
      dispatch(editData(book));
    }, [dispatch]);

  return <Detail Edit={Edit} logout={logout} loading={loading} back={back} />;
}
