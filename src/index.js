import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

import {createStore , applyMiddleware ,compose , combineReducers} from 'redux'
import {Provider } from 'react-redux'
import bergerReducer from './store/reducer/bergerReducer'
import orderReducer from './store/reducer/orderReducer'
import thunk from 'redux-thunk'
import Auth from './store/reducer/authReducer'

const reducer = combineReducers({
  berger : bergerReducer,
  order : orderReducer,
  auth : Auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer , composeEnhancers(applyMiddleware(thunk))) // applay asynchroun redux

const app = <Provider store={store}> 
<BrowserRouter><App/></BrowserRouter>
</Provider>


ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
