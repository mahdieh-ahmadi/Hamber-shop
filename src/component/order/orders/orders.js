import React from 'react'
import './orders.css'

const orders = (props) => {
    return(
        <div className='orders'>
            <p>ingredient:</p>
            <ul className='orders-item'>
                <li>Bacon ({props.bacon})</li>
                <li>Chees ({props.chees})</li>
                <li>Meat ({props.meat})</li>
                <li>Salad ({props.salad})</li>
            </ul>
            <p>price: <strong>USD {props.fee}</strong></p>
        </div>
    )
}

export default orders