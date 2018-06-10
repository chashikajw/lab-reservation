 import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import CalendarC from "./components/CalendarC";
import Timeslots from "./components/Timeslots";
import Footer from "./components/Footer";
import ReserveBtn from "./components/ReserveBtn";




class App extends Component {



    render() {

        return (
            <div className="App">

                <Header />
                <ReserveBtn/>
                <div className="row">
                    <div id="sidebar" className="col-sm-2">
                        <Sidebar/>
                    </div>
                    <div className="col-sm-10">
                        < CalendarC/>
                    </div>




                </div>
                <Footer/>




            </div>
    );
    }
}


export default App;