import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

import classes from "./OrderSummary.css";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Your Order</h2>
      <p>A Delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Price is: <strong>{props.price.toFixed(2)}€</strong>
      </p>
      <p>Proceed to checkout?</p>
      <Button
        className={classes.Button}
        size="medium"
        variant="contained"
        color="secondary"
        onClick={props.cancelOrder}
      >
        Cancel
      </Button>
      <Button
        className={classes.Button}
        size="medium"
        variant="contained"
        color="primary"
        onClick={props.confirmOrder}
      >
        Confirm
      </Button>
    </Fragment>
  );
};

export default orderSummary;
