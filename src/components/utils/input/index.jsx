import React from 'react';
import './input.css'
function Input(props)
{
    return <input className="input text-center" placeholder={props.placeholder}/>
}
export default Input;