import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link}  from 'react-router-dom';


const NavBar = ({history}) => {
  const routes = ["/home", "/favorites"];

  return (
    <AppBar position="static" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={history.location.pathname !== "/home" ? history.location.pathname : false}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
          <Tab label="Home" value={routes[0]} component={Link} to={routes[0]} onClick={()=> routes[0]}/>
          <Tab label="Favorites" value={routes[1]} component={Link} to={routes[1]} onClick={() => routes[1]}/>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
