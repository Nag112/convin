import React from 'react';
import './button.css'
function Button(props)
{
    return <button className={`d-block btn btn-${props.color}`}>{props.children}</button>
}
export default Button;