import React, { PureComponent } from 'react';
import  './App.css';

import Index from '../component/index/index'
import Bergur from '../component/berger/berger'
import ContaainerFactor from '../component/continueFactor/continueFactor'

import  { Route ,Switch} from 'react-router-dom'
import Order from '../component/order/order'
import Auth from '../component/auth/auth'
import Logout from '../component/auth/logout/logout'


class App extends PureComponent {
 
     
  render() {
    return (
      <Index>
        <Switch>
        <Route path='/' exact component={Bergur}/>
        <Route path='/factore' component={ContaainerFactor}/>
        <Route path='/orders' component={Order}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/logout' component={Logout}/>
        </Switch>
        
      </Index>
    )
    };
}

export default App;
