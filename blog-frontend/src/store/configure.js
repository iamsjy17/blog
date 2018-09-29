import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as modules from './modules';
import penderMiddleware from 'redux-pender';

const reducers = combineReducers(modules);
const midddlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...midddlewares))
  );

export default configure;
