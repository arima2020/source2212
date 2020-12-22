import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Main from "./containers/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/${uuid()}`} />
        </Route>
        <Route path="/:roomId" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
