import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import CapePreview from "./components/CapePreview";
import { Canvas } from "react-three-fiber";
import UserHomePage from "./pages/UserHomePage";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route path="/" component={UserHomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
