import React, { Component } from 'react';
import './../styles/Calendar.css';
import Calendar from 'react-calendar'
import Timeslots from "./Timeslots";

import Shedule from "./Shedule";



class CalendarC extends Component {


    state = {
        date: new Date(),
        books: { "name":"John", "age":31, "city":"New York" },
    }

    buttonc(){
        console.log(this.state.date);
    }

    onChange = date => this.setState({ date })

    render() {

        return (
            <div className="calendarc">


                    <div id ="cal" className="col-sm-5">


                            <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                            />


                    </div>
                    <div id = "shed" className="col-sm-6">

                        <Shedule >

                            <p>{this.state.date.getFullYear().toString()} / {this.state.date.getMonth().toString()} / {this.state.date.getDate().toString()} </p>
                            <p>{this.state.books.name}</p>
                        </Shedule>
                    </div>

            </div>
        );
    }
}
export default CalendarC;
