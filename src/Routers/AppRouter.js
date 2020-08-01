import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//import { NavBar } from "../components/ui/NavBar";
import { LoginPage } from "../components/login/LoginPage";
//import { MarvelPage } from "../components/marvel/MarvelPage";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PriveteRoute } from "./PriveteRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <PublicRoute isAutenticated={user.logged} exact path="/login" component={ LoginPage } />
          <PriveteRoute isAutenticated={user.logged} path="/" component={ DashBoardRoutes } />
        </Switch>
      </div>
    </Router>
  );
};
