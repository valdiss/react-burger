import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

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
      <p>Proceed to checkout?</p>
      <Button size="medium" variant="contained" color="secondary">
        Cancel
      </Button>
      <Button size="medium" variant="contained" color="primary">
        Confirm
      </Button>
    </Fragment>
  );
};

export default orderSummary;
