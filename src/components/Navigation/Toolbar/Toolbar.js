import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../Layout/Logo/Logo";

import classes from "./Toolbar.css";

const toolbar = props => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Logo className={classes.Logo} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default toolbar;
