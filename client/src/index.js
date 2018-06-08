import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
//
//

// const root = document.getElementById('root');
//
// ReactDOM.render(
//
//         <App/>
//    ,
//     root);
//
// registerServiceWorker();
//
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const calendaerReducer = (state = {
    day: new Date(),
     lastValues: []
 }, action) => {
     switch (action.type) {
         case "change_day":
             state = {
                 ...state,
                 day: state.day,
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
         case "change_day":
             state = {
                 ...state,
                 day: state.day,
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
     applyMiddleware(myLogger, logger())
 );

 store.subscribe(() => {
     console.log("Stroe updated" , store.getState());
 });

 store.dispatch({
     type: "change_day",
     payload: 123
 });


  const root = document.getElementById('root');

  ReactDOM.render(
      <Provider store={store}>
          <App/>
      </Provider>,
  root);


