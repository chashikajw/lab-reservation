import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './../styles/Sidebar.css';
import { connect } from 'react-redux';
import { selectHall } from './../actions/index'
import {bindActionCreators} from 'redux';

class Sidebar extends Component {



    render() {
        return (
            <div className="Sidebar">

                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {this.props.halls.map((hall) => <a key={hall.id} onClick={() =>this.props.selectHall(hall)}  className="nav-link"  data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{hall.name}</a>)}


            </div>


                </div>
            </div>
    );
    }
}

function mapStateToProps(state) {
    return{
        halls: state.halls
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectHall: selectHall
    },dispatch)

}
export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);
