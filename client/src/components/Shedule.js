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


                        <table className="table">

                            <tbody>


                            <div className="panel-body">


                                    {(() => {


                                        var indents = [];
                                        indents.push(<thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                            <th scope="col">Reason</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>);
                                        for(var i=0; this.state.bookings.length > i; i++){
                                            if (this.props.avtivehall.name== this.state.bookings[i].hallname) {
                                                if(this.state.bookings[i].is_accepted){


                                                    indents.push( <tr>
                                                        <td >{this.state.bookings[i].Date}</td>
                                                        <td >{this.state.bookings[i].timefrom}.00</td>
                                                        <td>{this.state.bookings[i].timeto}.00</td>
                                                        <td>{this.state.bookings[i].reason}</td>

                                                        <td> <button type="submit" className="btn btn-danger">Booked</button></td>
                                                    </tr>);

                                                }else{
                                                    indents.push( <tr>
                                                        <td >{this.state.bookings[i].Date}</td>
                                                        <td >{this.state.bookings[i].timefrom}.00</td>
                                                        <td>{this.state.bookings[i].timeto}.00</td>
                                                        <td>{this.state.bookings[i].reason}</td>

                                                        <td> <button type="submit" className="btn btn-warning">Pending</button></td>
                                                    </tr>);

                                                }


                                            }

                                        }
                                        return <div>
                                            {indents}

                                        </div>




                                    })()}




                            </div></tbody></table>



            </div>
                    </div></div>

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
