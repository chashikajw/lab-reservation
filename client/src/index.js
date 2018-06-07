import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Router, Route,  hashHistory } from "react-router";
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root');

ReactDOM.render(
   <App/>,
root);

registerServiceWorker();
