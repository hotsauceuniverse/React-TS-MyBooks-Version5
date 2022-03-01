// 여러 리듀서모듈을 관리

import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import {History} from "history"
import books from "./books";

// history 제네릭 <unknown> 설정시, 에러 발생,,, 이유는...??
// const reducer = (history: History<unknown>) => 
//   combineReducers({
//     auth,
//     router: connectRouter
// });

// export default reducer;

const reducer = (history: History) =>
  combineReducers({ 
    auth, 
    books, 
    router: connectRouter(history) 
});

export default reducer;