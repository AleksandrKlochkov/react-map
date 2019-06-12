import React from 'react'
import classes from './Button.css'
import { emptyStatement } from '@babel/types';

const Button = props =>{

    const cls=[
        classes.Button
    ]

    if(typeof props.className !== "undefined" || props.className !== null || props.className !==  ""){
        cls.push(classes[props.className])
    }
    console.log(cls)
    return(
        <button 
            className={cls.join(' ')}
            data-assignment = {props.assignment}
            onClick={props.onClick}
        >
        {props.children}
        </button>
    )


}


export default Button