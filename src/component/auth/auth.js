import Input from '../../hoc/form/form'
import Btn from '../berger/bergerindex/factor/button/button'
import Spinerr from '../../hoc/spinner/spinner'

import React ,{Component } from 'react'
import {  withRouter} from 'react-router-dom'
import * as actions from '../../store/actions/authAction'
import {connect} from 'react-redux'

class Authform extends Component {
    state={customer:{
        email:{
            typeconfig:{
                type:'email',
                name:'email',
                placeholder:'Enter Your Email',
                value:''
            },
            inputtype:'input',
        } ,
        password:{
            typeconfig:{
                type:'password',
                name:'password',
                placeholder:'your password',
                value:''
            },
            inputtype:'input',
        }
    }
        
    }

    changedHandler=(event , id) => {
        const handlerValue = {...this.state.customer}
        const changedHandler = {...handlerValue[id]};
        changedHandler.typeconfig.value = event.target.value;
        handlerValue[id] = changedHandler;
        this.setState({customer:handlerValue})
     }

     canclefactor = (event) => {
         event.preventDefault()
         this.props.change()
     }

     continueAuth = (event) => {
        event.preventDefault()
            this.props.AuthSignUp(
                this.state.customer.email.typeconfig.value , 
                this.state.customer.password.typeconfig.value,
                this.props.select);
     }

     jump = () => {
         if(this.props.ing !== null ){
            if( this.props.ing.salad === 0 
                && this.props.ing.meat === 0
                 && this.props.ing.chees === 0 
                 && this.props.ing.bakon === 0){
                this.props.history.push('/')
            }else{
                this.props.history.push('/factore')
            }}else{
            this.props.history.push('/')
         }
        
     }

    render(){
        if(this.props.token !== null && !this.props.select){
            this.jump()
        }

        const form = []
        for(let item in this.state.customer){
           form.push( {
               id:item,
               config : this.state.customer[item],
           })
       } 

       let error = null
       if(this.props.err){
           error = <p style={{color : 'black'}}>error!!</p>
       }

        return(
            this.props.process ? <Spinerr /> :  <form action='false' className='dataform'>
            {
             form.map(p => {
                 return(
                     <Input 
                     key={p.id} 
                     inputtype={p.config.inputtype} 
                     config={p.config.typeconfig}
                     chaned={(event) => this.changedHandler(event , p.id)}/>
                 )})
            }
            {error}
             <Btn 
             fnc={(event) => this.continueAuth(event)} 
             class='continueBtn'
             value='done' />

            <Btn 
                fnc={(event) => this.canclefactor(event)} 
                class='cancleBtn'
                value={this.props.select ? 'change to Login' : 'change to Authintication'} />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return{
        process : state.auth.proces,
        select : state.auth.select,
        token : state.auth.idtoken,
        err:state.auth.err,
        ing : state.berger.ingredient
    }
}

const mapDispatchToProps = dispatch => {
    return{
        AuthSignUp : (email , password , signup) => dispatch(actions.auth(email , password ,signup)),
        change : () => dispatch(actions.change())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authform))