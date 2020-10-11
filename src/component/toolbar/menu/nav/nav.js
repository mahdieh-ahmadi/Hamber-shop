import React from 'react'
import Logo from '../../logo/logo'
import Button from '../../navigation/navigation'
import './nav.css'

const nav = (props) => (
    <div className={props.navbarr} onClick={props.clicked}>
        <Logo/>
        <Button />
    </div>
)

export default nav