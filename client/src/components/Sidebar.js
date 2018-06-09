import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './../styles/Sidebar.css';

class Sidebar extends Component {



    render() {
        return (
            <div className="Sidebar">

                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {this.props.halls.map((hall,i) => <a key={i} onClick= {() => this.props.setday({hall})} className="nav-link"  data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{hall}</a>)}


            </div>


                </div>
            </div>
    );
    }
}

export default Sidebar;
