// store를 만드는 역할

import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import reducer from "./modules/reducer";
// import createSagaMiddleware from "@redux-saga/core";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import {routerMiddleware} from "connected-react-router"
import history from "../history";
import TokenService from "../services/TokenService";

const create = () => {
  const token = TokenService.get();
  const Saga = createSagaMiddleware();
  const store = createStore(
    reducer(history),
    { auth: 
      { 
        token, 
        loading: false, 
        error: null 
      } 
    },
    composeWithDevTools(applyMiddleware(Saga, routerMiddleware(history)))
  );
  Saga.run(rootSaga);
  return store;
};

export default create;