import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers/index'

import {combineReducers } from 'redux';
import HallReducer from './reducers/reducer-halls';




import { createStore,  applyMiddleware } from 'redux';
import logger from 'redux-logger';

/*
const calendaerReducer = (state = {
    day: new Date(),
     lastValues: []
 }, action) => {
     switch (action.type) {
         case "change_day":
             state = {
                 ...state,
                 day: "2010",
                 lastValues: [...state.lastValues , action.payload]
             };
             break;
     }
     return state;
 };

 const hallReducer = (state = {
     hall: 'w002',
     lastValues: []
 }, action) => {
     switch (action.type){
         case "change_hall":
             state = {
                 ...state,
                 hall: state.day,
                 lastValues: [...state.lastValues , action.payload]
             };
             break;
     }
     return state;
 };

 const myLogger = (store) => (next) => (action) => {
     console.log("Logged Action" , action);
     next(action) ;
 };

 const store = createStore(
     combineReducers({calendaerReducer, hallReducer}),
     {},
     applyMiddleware(myLogger, logger)
*/



const store = createStore(allReducers);

  const root = document.getElementById('root');

  ReactDOM.render(
      <Provider store={store}>
          <App/>
      </Provider>,
  root);

registerServiceWorker();


