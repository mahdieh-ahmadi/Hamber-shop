import React from 'react'
import './backdrop.css'

const backdrop = (props) => {
return (
    <div className={props.classes} onClick={props.hideback}>
    </div>
)
}

export default backdrop;