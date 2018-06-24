import React from 'react';
import Button from '@material-ui/core/Button';

import classes from './BuildControl.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <Button
            size="small"
            onClick={props.ingredientRemoved}
            className={classes.Less}
            disabled={props.disabled}>Less</Button>
        <Button
            size="small"
            onClick={props.ingredientAdded}
            className={classes.More}>More</Button>
    </div>
);

export default buildControl;