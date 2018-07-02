import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/Home.css';

import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import CalendarC from "./components/CalendarC";
import Timeslots from "./components/Timeslots";
import Footer from "./components/Footer";
import ReserveBtn from "./components/ReserveBtn";
import Shedule from "./components/Shedule";
import SearchForm from "./components/SearchForm";
import {Route, Router, browserHistory, IndexRoute} from "react-router";




class Home extends Component {



    render() {

        return (
            <div className="Home">

                <Header />

                <div className="row">
                    <div id="reserbtn" className="col-sm-6">
                        <ReserveBtn/>
                    </div>

                </div>
                <div className="row">
                    <div id="sidebar" className="col-sm-2">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-10">

                            < CalendarC/>


                        <div id = "shed" className="col-sm-7">

                            <SearchForm/>
                            <Shedule/>




                        </div>


                    </div>




                </div>
                <Footer/>




            </div>
        );
    }
}


export default Home;