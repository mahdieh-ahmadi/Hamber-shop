import React,{Component} from 'react'
import './toolbar.css'
import Logo from './logo/logo'
import Nav from './navigation/navigation'
import Bergericon from './menu/bergericon'
import Hoc from '../../hoc/hoc'
import Navbar from './menu/nav/nav'

class toolbar extends Component{
    state = {
        show:false
    }

    navhandler = () => {
        this.setState({show:!this.state.show})
    }

    render() {
        let classes = ['navbar','hidden'].join(' ')
        if(this.state.show){
            classes='navbar'
        }
   
    return(
        <Hoc>
            <Navbar navbarr={classes} clicked={this.navhandler}/>
            <div className='toolbar'>
                <section className='iconberger'>
                    <Bergericon shownav={this.navhandler} bergerclass={'bergericon'}/>
                </section>
                
                <Logo/>
                <section className='navbutton'>
                    <Nav/>
                </section>
                
            </div>
        </Hoc>
        
    )}
}

export default toolbar