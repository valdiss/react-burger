import React from 'react';
import classes from './Modal.css';

const modal = props => (
    <div className={classes.Modal} style={
        {
            transform: props.purchasing ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.purchasing ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;