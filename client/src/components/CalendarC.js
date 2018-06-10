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
            bookings: []
        }
    }

    componentDidMount(){
        fetch('api/bookings')
            .then(res => res.json)
            .then(bookings => this.setState({bookings}, () => console.log("bookings fetched..", bookings) ));
    }


    onChange = date => this.setState({date})






    render() {

        return (
            <div className="calendarc">


                    <div id ="cal" className="col-sm-5">

                        <div className="hallname">
                            <h2>{this.props.avtivehall.name}</h2>
                        </div>

                            <Calendar
                                onChange = {this.onChange}
                                onClick={() =>this.props.selectDay("20100")}
                                value={this.state.date}

                            />


                    </div>
                    <div id = "shed" className="col-sm-6">
                        {(() => {
                            if ("LabA" == this.props.activehall) {
                                return <p>{this.props.activehall}</p>;

                            }
                            else{
                                return <p>{this.props.activehall}</p>;
                                {console.log("adoo")}
                            }
                        })()}
                        <Shedule >
                            {(() => {
                                if ("2018" == this.state.date.getFullYear().toString()) {
                                    return <p>{this.state.date.getFullYear().toString()} / {this.state.date.getMonth().toString()} / {this.state.date.getDate().toString()} </p>;

                                }
                                else{
                                    return <h3 className="text-center">
                                        No events</h3>;

                                }
                            })()}




                        </Shedule>
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
