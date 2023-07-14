import React from "react";
import './ButtonPrincipal.css';

import api from '../../../api';

import { useState, useEffect } from 'react';

import {filtrar} from '../../Card/Main.js'


function ButtonPrincipal(props) {

    return (
        <div className="container" onClick={props.onClick}>
            <button className="button"  > <img className="icon" src={props.imagem}/> {props.name} </button>
            
        </div>
    );


   
}




export default ButtonPrincipal;