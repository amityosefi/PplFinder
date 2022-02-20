import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  Home  from "pages/Home/Home";
import Favorites from "pages/Favorites/Favorites";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar/NavBar";
const { PUBLIC_URL } = process.env;

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router basename={PUBLIC_URL}>
        <Route path="/" render={(history) => (
          <NavBar history={history} />
        )}/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
