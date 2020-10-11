import React,{Component} from 'react'
import Orders from './orders/orders'
import {connect} from 'react-redux'
import Spinner from '../../hoc/spinner/spinner'
import * as actionsType from '../../store/actions/orderactions'

class Order extends Component{

    componentDidMount(){
        this.props.setOrder(this.props.token , this.props.userid)
    }

    render(){
        let order = <p>noting</p>
        if(this.props.process){
                order = <Spinner />
        }
        else if(this.props.orders === null && !this.props.process){
            order = <p>noting</p>
        }else if(this.props.orders !== null && !this.props.process){
            order = this.props.orders.map(p => {
                return( <Orders 
                    key={Math.random()*10}
                    bacon={p.order.bakon} 
                    chees={p.order.chees} 
                    meat={p.order.meat} 
                    salad={p.order.salad} 
                    fee={p.fee}/>)
             })
        }
        return(
            <div>
                {order}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        orders : state.order.order,
        token: state.auth.idtoken,
        userid: state.auth.localID,
        process : state.order.process
    }
}

const mapDispatchtoProps = dispatch => {
    return{
        setOrder :  (token , userid) => dispatch(actionsType.initialOrder(token,userid))
    }
}

export default connect(mapStateToProps , mapDispatchtoProps)(Order) 