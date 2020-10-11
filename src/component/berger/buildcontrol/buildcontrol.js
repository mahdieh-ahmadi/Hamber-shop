import React ,{Component}  from 'react'
import Detail from './controldetails/controldetails'
import './buildcontrol.css'

import {connect} from 'react-redux'
import {  withRouter} from 'react-router-dom'


class Builddetails extends Component  {
    state = {
        control : [
            {label : 'bakon' , type : 'bakon'} ,
            {label : 'salad' , type : 'salad'} ,
            {label : 'chees' , type : 'chees'} ,
            {label : 'meat' , type : 'meat'} 
         ]
    }

    auth = () => {
        this.props.history.push('/auth')
    }

    render(){
        const bergerindex = this.state.control.map(logkey => {
            return( <Detail key={logkey.label} 
                         addhandler={() => this.props.addhendler(logkey.label)} 
                         removehandler={() => this.props.removehandler(logkey.label)}
                         disablehandler={ this.props.removedisable[logkey.label]}>
                         {logkey.label}
                     </Detail>)
         })
 
         return(
             <div className='list'>
                 <ul>
                 {bergerindex}
                 </ul>
                 {this.props.token !== null && !this.props.select ?
                 <button className='sale' 
                     disabled={this.props.disable} 
                     onClick={this.props.clicked}>Order now!</button> :
                 <button className='sale' 
                     disabled={this.props.disable} 
                     onClick={this.auth}>Please signin!</button>}
                 
             </div>
             
         )
    }
       
}

const mapStateToProps = state => {
    return{
        select : state.auth.select,
        token : state.auth.idtoken
    }
}

export default connect(mapStateToProps)(withRouter(Builddetails))