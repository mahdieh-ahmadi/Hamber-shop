import React,{Component} from 'react'
import Btn from '../../berger/bergerindex/factor/button/button'
import './dataform.css'
import intens from '../../../hoc/axios/axios'
import {withRouter} from 'react-router-dom'
import Input from '../../../hoc/form/form'
import {connect} from 'react-redux'

class dataList extends Component{
   state={
        customer:{
            name:{
                typeconfig:{
                    type:'text',
                    name:'name',
                    placeholder:'Name',
                    value:''
                },
                inputtype:'input',
            } ,
            country:{
                typeconfig:{
                    type:'text',
                    name:'contry',
                    placeholder:'your contry',
                    value:''
                },
                inputtype:'input',
            },
            city:{
                typeconfig:{
                    type:'text',
                    name:'city',
                    placeholder:'your city',
                    value:''
                },
                inputtype:'input',
            },
            email:{
                typeconfig:{
                    type:'email',
                    name:'email',
                    placeholder:'your E-mail',
                    value:''
                },
                inputtype:'input',
            },
            sreet:{
                typeconfig:{
                    type:'text',
                    name:'street',
                    placeholder:'street',
                    value:''
                },
                inputtype:'input',
            },
            type:{
                typeconfig:{
                    name:'type',
                    option:['fastest','cheepest'],
                    value:'fastest'
                },
                inputtype:'select',
            }
        }
        
        }
   

   componentDidMount(){
       this.setState({berger:this.props.berger , totalfee:this.props.totalfee});
   }

   canclefactor = () => {
    this.props.history.push('/')
}

continueOrder = (event) => {
    event.preventDefault()
    const customerdata = {}
    for(let i in this.state.customer){
        customerdata[i]=this.state.customer[i].typeconfig.value
    }
    const data = {
         order:this.state.berger,
         fee : this.state.totalfee,
         customer: customerdata,
        userid:this.props.userid}
     intens.post('/order.json',data) 

     this.props.history.push('/') 
 }

 changedHandler=(event , id) => {
    const handlerValue = {...this.state.customer}
    const changedHandler = {...handlerValue[id]};
    changedHandler.typeconfig.value = event.target.value;
    handlerValue[id] = changedHandler;
    this.setState({customer:handlerValue})
 }

    render(){
        const form = []
         for(let item in this.state.customer){
            form.push( {
                id:item,
                config : this.state.customer[item],
            })
        }
        
        return(
            <div className='dataform'>
                <h4>Pleas insert your data!</h4>
                <form action='false' className='dataform'>
                   {
                    form.map(p => {
                       
                        return(
                            <Input 
                            key={p.id} 
                            inputtype={p.config.inputtype} 
                            config={p.config.typeconfig}
                            chaned={(event) => this.changedHandler(event , p.id)}/>
                        )
                    })}
                    
                        <div className='btns'>
                        <Btn 
                            fnc={this.canclefactor} 
                            class='cancleBtn'
                            value='cancle' />
                        <Btn 
                            fnc={this.continueOrder} 
                            class='continueBtn'
                            value='continue' />
                    </div>
                </form>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return{
        userid: state.auth.localID
    }
}

export default connect(mapStateToProps)(withRouter(dataList) )