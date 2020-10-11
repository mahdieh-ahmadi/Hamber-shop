import React,{Component} from 'react'
import './nav.css'
import {withRouter,NavLink} from 'react-router-dom'

import {connect} from 'react-redux' 

class Nav extends Component{
    ingrideient= () => {
        this.props.history.push('/')
    }

    ordersShow = () => {
        this.props.history.push('/orders')
    }

    render(){
        if(this.props.token !== null && !this.props.select){
            
        }
        return(
            <div className='nav'>
                <NavLink to='/' exact>Ingridient</NavLink>
                { this.props.token && !this.props.change ?
                <NavLink to='/orders' exact>Orders</NavLink>: null}
               { this.props.token && !this.props.change ? 
               <NavLink to='/logout' exact>logout</NavLink> : 
               <NavLink to='/auth' exact>Authintication</NavLink>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        token : state.auth.idtoken,
        change : state.auth.select,
        select : state.auth.select,
        err:state.auth.err
    }
}

export default connect(mapStateToProps)(withRouter(Nav))