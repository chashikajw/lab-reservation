 import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import CalendarC from "./components/CalendarC";
import Timeslots from "./components/Timeslots";
import Footer from "./components/Footer";
import ReserveBtn from "./components/ReserveBtn";
 import Shedule from "./components/Shedule";
 import SearchForm from "./components/SearchForm";
 import {Route, Router, browserHistory, IndexRoute} from "react-router";
 import Home from './Home';
 import Login from "./components/Login";
 import Register from "./components/Register";




class App extends Component {



    render() {

        return (
            <Router history={browserHistory}>
                <Route path={"/home"} component={Home}/>
                <Route path={"/"} component={Register}/>
                <Route path={"/Login"} component={Login}/>

            </Router>
    );
    }
}


export default App;