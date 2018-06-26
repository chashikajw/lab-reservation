import React, { Component } from 'react';
import './../styles/Calendar.css';
import Calendar from 'react-calendar'
import Timeslots from "./Timeslots";
import { connect } from 'react-redux';

import Shedule from "./Shedule";
import { selectDay  } from './../actions/index'
import {bindActionCreators} from "redux";


class CalendarC extends Component {

    constructor(){
        super();
        this.state = {
            date: new Date(),
            bookings: [],
            test: [1,2],
            month: new Date().getDay()
        }
    }





    onChange = month => this.props.selectDay(this.state.month);

    changday(){
        this.props.selectDay(this.state.month);
    }












    render() {

        return (
            <div className="calendarc">


                    <div id ="cal" className="col-sm-5">

                        <div className="hallname">
                            <h2>{this.props.avtivehall.name}</h2>
                        </div>

                            <Calendar
                                onClick={() =>this.props.selectDay(this.state.month.bind(this))}

                                value={this.state.date}

                            />

                    </div>



            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        avtivehall: state.activehall,
        activeday: state.activeday,
        bookdays: state.bookdays

    };


}



function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectDay: selectDay
    },dispatch)

}
export default connect(mapStateToProps,matchDispatchToProps)(CalendarC);
