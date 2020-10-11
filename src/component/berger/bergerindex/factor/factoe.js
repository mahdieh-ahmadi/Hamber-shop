import React from 'react'
import './factor.css'
import Factordetail from './factoritems/factoritems'
import Btn from './button/button'

const factor = (props) => {
    return(
        <div className={props.hidefactore}>
            <h2>Your Order</h2>
    <p><strong>total fee is : {props.fee}</strong></p>
            <p>Adelicios burger with the following ingredient:</p>
            <ul>
                <Factordetail
                meat={props.meat}
                chees={props.chees}
                salad={props.salad}
                bacon={props.bacon}/>
            </ul>
            <p>continue to checkout?</p>
        <div className='btns'>
            <Btn 
                fnc={props.cancle} 
                class='cancleBtn'
                value='cancle' />
            <Btn 
                fnc={props.continue} 
                class='continueBtn'
                value='continue' />
        </div>
        </div>
    )
}

export default factor