import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import CalendarC from "./components/CalendarC";
import Timeslots from "./components/Timeslots";
import Footer from "./components/Footer";



export default class App extends Component {
    state = {
        response: ''
    };

    loadHalls(){

    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

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
        shedule: state.hallReducer
    };
}
