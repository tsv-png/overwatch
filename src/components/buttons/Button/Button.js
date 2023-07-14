import  React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div className="container" onClick={props.onClick}>
            <button className="button"> {props.name} </button>
        </div>
    );
}

export default Button;