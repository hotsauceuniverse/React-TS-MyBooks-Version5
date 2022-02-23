import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book";
import { BookType, RootState } from "../types";
import {
  getBooks as getBooksSagaStart,
  deleteBook as deleteBookSagaStart,
  editClick,
} from "../redux/modules/books";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { push } from "connected-react-router";

export default function BookContainer() {
  const dispatch = useDispatch();
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );
  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);
  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  const goAdd = useCallback(() => {
    dispatch(push("/add"));
  }, [dispatch]);
  const deleteBook = useCallback(
    (bookId: number) => {
      dispatch(deleteBookSagaStart(bookId));
    },
    [dispatch]
  );
  const Editclick = useCallback(
    (bookId: number) => {
      console.log("edit");
      dispatch(editClick(bookId));
    },
    [dispatch]
  );

  return (
    <Book
      books={books}
      loading={loading}
      getBooks={getBooks}
      error={error}
      logout={logout}
      goAdd={goAdd}
      deleteBook={deleteBook}
      Editclick={Editclick}
    />
  );
}
