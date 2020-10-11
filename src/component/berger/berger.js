import React, { Component } from 'react'
import Hoc from '../../hoc/hoc'
import './Berger.css'
import Burgerindex from './bergerindex/bergerindex'
import Build from './buildcontrol/buildcontrol'
import Factor from './bergerindex/factor/factoe'
import Backdrop from '../backdrop/backdrop'
import Spinner from '../../hoc/spinner/spinner'
import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'
import * as actionsType from '../../store/actions/begerActions'

class Berger extends Component{

    state={
        hide : true
    }

    componentDidMount () {
        this.props.onInitIngredients();
    }
    
    hidebackdrop = () => {
        this.setState({hide:!this.state.hide})
    }

    continuehandler = () => {
        console.log(this.props)
        this.setState({hide:!this.state.hide})
        const queryParams=[];
        for(let i in this.state.berger){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.berger[i]));
        }
        queryParams.push(`totalfee=${this.props.totalFee}`)
        const querySrting = queryParams.join('&')
        this.props.history.push({
            pathname:'/factore',
        search:'?'+querySrting})
    }


    render(){

        const disableinfo = {...this.props.ing};
        for(let key in disableinfo){
            disableinfo[key] = disableinfo[key] <= 0;
        }

        let classhide ='back'
        let factorhide ='factor'
        if(this.state.hide){
            classhide=['back' , 'hide'].join(' ')
            factorhide = ['factor' , 'hide'].join(' ')
        }
        let main =<Spinner/> 
        if (this.props.ing !== null){
            const structure = Object.keys(this.props.ing).map( logkey => {
                return([...Array(this.props.ing[logkey])].map((_,i) => {
                    return(<Burgerindex type={logkey} key={logkey+i}/>)
                }))
            }).reduce((arr,el) => arr.concat(el))
    
            let classes = null;
            let disable = true;
            if (structure.length !== 0){
               disable = false;
                classes = 'disable';
            }
            main=(<Hoc>
                <Factor
                hidefactore={factorhide}
                meat={this.props.ing.meat}
                chees={this.props.ing.chees}
                salad={this.props.ing.salad}
                bacon={this.props.ing.bakon}
                cancle={this.hidebackdrop}
                continue={this.continuehandler}
                fee={this.props.totalFee}/>
                <div className='burger'>
                <Burgerindex type={'bread-top'}/>
                {structure}
                <p className={[classes, 'masage'].join(' ')}>Pleas select food!</p>
                <Burgerindex type={'bread-bottom'}/>    
                <p className={'masage'}>{this.props.totalFee}</p>
                </div>
                
                <Build addhendler={this.props.AddIngrediwnt} 
                removehandler={this.props.RemoveIngredient}
                disable={disable}
                removedisable={disableinfo}
                clicked={this.hidebackdrop}/>
            </Hoc>)
        }

        return(
            <Hoc>
            <Backdrop 
            hideback={this.hidebackdrop}
            classes = {classhide}/>
            
            {main}
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        ing : state.berger.ingredient,
        totalFee : state.berger.fee
    }
}

const mapDispatchToProps = dispatch => {
    return{
        AddIngrediwnt : (det) => dispatch (actionsType.addHanler(det)),
        RemoveIngredient : (det) => dispatch (actionsType.removeHanler(det)),
        onInitIngredients: () => dispatch(actionsType.initIngredients()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Berger)) ;