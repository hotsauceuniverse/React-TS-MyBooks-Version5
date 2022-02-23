import { push } from "connected-react-router";
import { Action, createActions, handleActions } from "redux-actions";
import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import history from "../../history";
import BookService from "../../services/BookService";
import { BookEditType, BookReqType, BookState, BookType } from "../../types";

const initialstate: BookState = {
  books: null,
  loading: false,
  error: null,
};
const prefix = "my-books/books";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);
const reducer = handleActions<BookState, BookType[]>(
  {
    PENDING: (state) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      books: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialstate,
  { prefix }
);
export default reducer;

export const { getBooks, addBook, deleteBook, editClick, editData } =
  createActions(
    "GET_BOOKS",
    "ADD_BOOK",
    "DELETE_BOOK",
    "EDIT_CLICK",
    "EDIT_DATA",
    {
      prefix,
    }
  );

function* getBooksSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const books: BookType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN_ERROR")));
  }
}
function* addBookSaga(action: Action<BookReqType>) {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const book: BookType = yield call(
      BookService.addBook,
      token,
      action.payload
    );
    const books: BookType[] = yield select((state) => state.books.books);
    yield put(success([...books, book]));
    yield put(push("/"));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN_ERROR")));
  }
}
function* deleteBookSaga(action: Action<number>) {
  try {
    const bookId = action.payload;
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    yield call(BookService.deleteBook, token, bookId);
    const books: BookType[] = yield select((state) => state.books.books);
    yield put(success(books.filter((book) => book.bookId !== bookId)));
  } catch (error) {
    yield put(fail(new Error("UNKNOWN")));
  }
}
function* Editclick(action: Action<number>) {
  try {
    console.log("edit");

    history.push({
      pathname: `/detail${action.payload}`,
      // state: { bookId: action.payload },
    });
  } catch (error) {
    yield put(fail(new Error("UNKNOWN")));
  }
}
function* EditDataSaga(action: Action<BookReqType>) {
  try {
    console.log(action.payload);
  } catch (error) {
    yield put(fail(new Error("UNKNOWN")));
  }
}
export function* rootSaga() {
  yield all([getBooksSaga()]);
}
export function* booksSaga() {
  yield takeLatest(`${prefix}/GET_BOOKS`, getBooksSaga);
  yield takeEvery(`${prefix}/ADD_BOOK`, addBookSaga);
  yield takeEvery(`${prefix}/DELETE_BOOK`, deleteBookSaga);
  yield takeEvery(`${prefix}/EDIT_CLICK`, Editclick);
  yield takeEvery(`${prefix}/EDIT_DATA`, EditDataSaga);
}
