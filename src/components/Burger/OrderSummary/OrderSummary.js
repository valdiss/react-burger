import React, { Fragment } from 'react';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Fragment>
            <h2 style={{ textAlign: 'center' }}>Your Order</h2>
            <p>A Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Proceed to checkout?</p>
        </Fragment>
    )
};

export default orderSummary;