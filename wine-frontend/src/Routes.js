import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading } from "./components/";

const WinesLazy = lazy(() => import("./pages/Wines/Wines"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={WinesLazy} />
          <Route exact path="/login" component={LoginLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
