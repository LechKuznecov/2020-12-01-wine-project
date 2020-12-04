import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, Footer } from "./components/";
import { AuthContext } from "./context/AuthContext";

const WinesLazy = lazy(() => import("./pages/Wines/Wines"));
const AddWineTypeLazy = lazy(() => import("./pages/AddWineType/AddWineType"));
const WineListLazt = lazy(() => import("./pages/WineList/WineList"));
const AddWineQtyLazy = lazy(() => import("./pages/AddWineQty/AddWineQty"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));

function Routes() {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <Header isLoggedIn={!!auth.token} />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={WinesLazy} />
          <Route exact path="/addWineType" component={AddWineTypeLazy} />
          <Route exact path="/wineList" component={WineListLazt} />
          <Route exact path="/addWineQty" component={AddWineQtyLazy} />
          <Route exact path="/login" component={LoginLazy} />
          <Route exact path="/register" component={RegisterLazy} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
