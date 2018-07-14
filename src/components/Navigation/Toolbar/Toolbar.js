import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import classes from "./Toolbar.css";

const toolbar = props => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Burger Builder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default toolbar;
