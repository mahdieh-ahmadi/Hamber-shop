import {connect} from 'react-redux'
import * as actions from '../../../store/actions/authAction'
import React, {Component } from 'react'

class Logout extends Component{
    componentWillMount(){
        this.props.logout()
        
    }

    render(){
        this.props.history.push('/')
        return <p>logout ...</p>
    }
}

const mapDispatchToState = dispatch => {
    return{
        logout : () => dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToState)(Logout)