import React from 'react'
import './controldetails.css'

const controldetail = (props) => {
    return (
        <li>
            <p>{props.children}</p>
            <button onClick={props.addhandler}>Add</button>
            <button onClick={props.removehandler} disabled={props.disablehandler}>Remove</button>
        </li>
    )
}

export default controldetail;