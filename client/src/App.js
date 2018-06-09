 import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import CalendarC from "./components/CalendarC";
import Timeslots from "./components/Timeslots";
import Footer from "./components/Footer";
import { connect } from 'react-redux';



class App extends Component {


    render() {
        var halls = ["W001","W002","4th floor","Mini audi","Irque lab","LabA","LabB","LabC","LabD"];
        return (
            <div className="App">

                <Header />
                <div className="row">
                    <div id="sidebar" className="col-sm-2">
                        <Sidebar halls= {halls}/>
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

const mapStateToProps = (state) => {
    return {
        CalenderC: state.calendaerReducer,
        Sidebar: state.hallReducer
    };
};

 const mapDispatchToProps = (distpatch) => {
     return {

         setday: (hall) => {
             console.log("you clikced");
             distpatch(
                 {
                     type: "change_hall",
                     payload: hall
                 }
             );
         }
     };
 };

export default connect(mapStateToProps , mapDispatchToProps)(App);