import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/Reducers/rootReducer';
import thunk from 'redux-thunk';


const logger = state =>{
	return next =>{
		return action => {
			// console.log('[Middleware] Dispatching', action);
			const result = next(action);
			// console.log('[Middleware] next state', store.getState())
			return result;
		}
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
