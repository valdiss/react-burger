import React from "react";
import Button from "@material-ui/core/Button";

import classes from "./BuildControl.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div className={classes.Buttons}>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={props.ingredientRemoved}
        disabled={props.disabled}
      >
        Less
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={props.ingredientAdded}
      >
        More
      </Button>
    </div>
  </div>
);

export default buildControl;
