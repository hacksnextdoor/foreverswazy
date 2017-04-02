import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
export default createStore(reducer,middleware);
