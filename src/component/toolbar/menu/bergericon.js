import React from 'react'
import './bergericon.css'
 
const bergericon = (props) => (
    <div className={props.bergerclass} onClick={props.shownav}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default bergericon