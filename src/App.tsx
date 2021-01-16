import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import UserHomePage from "./pages/UserHomePage";
import LoginPage from "./pages/LoginPage";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={UserHomePage} />
          <Route exact path="/login/" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
