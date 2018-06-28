import React, { Component} from 'react';
import './../styles/Shedule.css';
import Sidebar from "./Sidebar";
import CalendarC from "./CalendarC";
import Timeslots from "./Timeslots";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {selectDay} from "../actions";


class Shedule extends Component {

    constructor(){
        super();

        this.state = {
            date: new Date(),
            bookings: [],
            month: new Date().getDay()
        }
    }

    componentDidMount() {


        fetch('/api/getreservations')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(bookings => {

                this.state.bookings = bookings;
                this.setState({ bookings})
            });

        console.log(this.props.avtivehall);
        console.log(this.props.activeday);
    }



    render(){

        return(
            <div className= "Timeslots">


                <div className="panel panel-default">
                    <div className="panel panel-primary">

                        <h3 className="text-center">
                            {this.props.avtivehall.name}</h3>



                        <h3 className="text-center">
                           </h3>



                        <div className="panel-body">
                            <ul>

                                    {(() => {


                                        var indents = [];
                                        for(var i=0; this.state.bookings.length > i; i++){
                                            if (this.props.avtivehall.name== this.state.bookings[i].hallname) {
                                                indents.push(<p>{this.state.bookings[i].timefrom}.00 - {this.state.bookings[i].timeto}.00&nbsp; &nbsp;
                                                    {this.state.bookings[i].reserve_person}&nbsp; &nbsp;<a  className="btn btn-danger btn-sm">Booked</a> </p>);


                                            }

                                        }
                                        return <div>
                                            {indents}

                                        </div>




                                    })()}


                            </ul>

                            {this.props.activedayt}



            </div>
                    </div></div></div>

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


export default connect(mapStateToProps,matchDispatchToProps)(Shedule);
