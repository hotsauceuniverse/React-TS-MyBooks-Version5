import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Error from './pages/Error';
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/edit/:id" component={Edit} />
          <Route path="/book/:id" component={Detail} />
          <Route path="/add" component={Add} />
          <Route path="/signin" component={Signin} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  )
}

export default App;
