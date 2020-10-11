import React,{Component} from 'react'
import Burgerindex from '../berger/bergerindex/bergerindex'
import './continuefactore.css'
import Btn from '../berger/bergerindex/factor/button/button'
import {withRouter, Route} from 'react-router-dom'

import Dataform from './dataForm/dataForm'
import {connect} from 'react-redux'

class ContinueFactor extends Component {

    canclefactor = () => {
        this.props.history.push('/')
    }

    continueFactor = () => {
        this.props.history.push(this.props.match.path + '/data')
    }

    

    render(){
        let structure = <h1>h</h1>
        if(this.props.ing !== null ){
            structure = Object.keys(this.props.ing).map( logkey => {
                return([...Array(this.props.ing[logkey])].map((_,i) => {
                    return(<Burgerindex type={logkey} key={logkey+i}/>)
                }))
            }).reduce((arr,el) => arr.concat(el))
        }
       

        return(
            <div className='continuefactore'>
                <Burgerindex type={'bread-top'}/>
                {structure}
                <Burgerindex type={'bread-bottom'}/>
                <section className='factorBtn'>

                <div className='btns'>
                <Btn 
                    fnc={this.canclefactor} 
                    class='cancleBtn'
                    value='cancle' />
                <Btn 
                    fnc={this.continueFactor} 
                    class='continueBtn'
                    value='continue' />
                </div>

                </section>
                <Route path='/factore/data' render = { () => 
                <Dataform 
                canclefactor={this.canclefactor} 
                continueOrder={this.ContinueFactor} 
                berger={this.props.ing}
                totalfee={this.props.totalFee}/> }/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ing : state.berger.ingredient,
        totalFee : state.berger.fee
    }
}

export default connect(mapStateToProps)(withRouter(ContinueFactor));