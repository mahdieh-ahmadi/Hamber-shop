import React from 'react'
import Hoc from '../../../../../hoc/hoc'

const factoritems = (props) => {
    return(
        <Hoc>
            <li>meat : {props.meat}</li>
            <li>chees : {props.chees} </li>
            <li>salad : {props.salad} </li>
            <li>bacon  :{props.bacon} </li>
        </Hoc>
    )
} 

export default factoritems