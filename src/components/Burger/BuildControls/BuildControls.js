import React from 'react';

import BuildControl from '../BuildControls/BuildControl/BuildControl';

import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}€</strong></p>
        {
            controls.map((control) => {
                return <BuildControl
                    ingredientRemoved={() => props.ingredientRemoved(control.type)}
                    ingredientAdded={() => props.ingredientAdded(control.type)}
                    disabled={props.disabledInfo[control.type]}
                    key={control.label}
                    label={control.label} />
            })
        }
    </div>
);

export default buildControls;