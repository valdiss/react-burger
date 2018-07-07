import React from 'react';
import Button from '@material-ui/core/Button';

import BuildControl from '../BuildControls/BuildControl/BuildControl';

import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = props => {
    const controllers = controls.map((control) => {
        return <BuildControl
            ingredientRemoved={() => props.ingredientRemoved(control.type)}
            ingredientAdded={() => props.ingredientAdded(control.type)}
            disabled={props.disabledInfo[control.type]}
            key={control.label}
            label={control.label} />
    });
    return (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}€</strong></p>
        {controllers}
        <br />
        <Button
            disabled={!props.purchasable}
            size="large"
            variant="contained"
            color="primary"
            onClick={props.purchasing}>ORDER NOW</Button>
    </div >
    );
}

export default buildControls;