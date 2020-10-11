import React from 'react'
import './button.css'

const btn = (props) => {
    return(
            <button className={props.class} onClick={props.fnc}>{props.value}</button>
    )
}

export default btn