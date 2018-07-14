import React, { Fragment } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";

const layout = props => (
  <Fragment>
    <div>Toolbar, SideDrawer</div>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);

export default layout;
