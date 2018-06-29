import React, { Component} from 'react';
import './../styles/SearchForm.css';
import Sidebar from "./Sidebar";
import CalendarC from "./CalendarC";
import Timeslots from "./Timeslots";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {selectDay} from "../actions";
import axios from "axios/index";
import moment from "moment/moment";
import DatePicker from 'react-datepicker';
import Shedule from './Shedule';


class SearchForm extends Component {

    constructor(){
        super();

        this.state = {
            Date: moment(),
            hall: '',
            bookings: [],
            month: new Date().getDay()
        }

        //date picker
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }




    onSubmit(e) {

        this.setState({ bookings: {}});
        e.preventDefault();
        axios.post('/api/searchBookings',  {reservation: this.state})
            .then(res => {
                console.log(res.data);
                this.setState({ bookings:res.data})
            })


        //this.props.signUpRequest(this.state)


    }

    //date picker
    handleChange(date) {
        this.setState({
            Date: date
        });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }



    render(){

        return(
            <div className= "Timeslots">


                <div className="panel panel-default">
                    <div className="panel panel-primary">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="col-md-4" id="inputState">
                                    <DatePicker
                                        selected={this.state.Date}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select id="inputState" className="form-control" name="hallname" value={this.state.hallname}  onChange={this.onChange}>
                                        <option selected >Select Hall</option>

                                        {this.props.halls.map((hall) => <option value={hall.name} >{hall.name}</option>)}


                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>


                        <h3 className="text-center">

                        </h3>



                        <div className="panel-body">



                            <table className="table">

                                <tbody>


                                {(() => {
                                    if(this.state.bookings.length ==0){
                                        <Shedule/>
                                    }else{

                                        var indents = [];

                                        indents.push(<thead>
                                        <tr>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                            <th scope="col">Reason</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>);
                                        for(var i=0; this.state.bookings.length > i; i++){
                                            if(this.state.bookings[i].is_accepted){
                                                indents.push( <tr>
                                                    <td >{this.state.bookings[i].timefrom}.00</td>
                                                    <td>{this.state.bookings[i].timeto}.00</td>
                                                    <td>{this.state.bookings[i].reason}</td>

                                                    <td> <button type="submit" className="btn btn-danger">Booked</button></td>
                                                </tr>);
                                            }else{
                                                indents.push( <tr>
                                                    <td >{this.state.bookings[i].timefrom}.00</td>
                                                    <td>{this.state.bookings[i].timeto}.00</td>
                                                    <td>{this.state.bookings[i].reason}</td>

                                                    <td> <button type="submit" className="btn btn-warning">Pending</button></td>
                                                </tr>);
                                            }






                                        }
                                        return <div>
                                            {indents}

                                        </div>
                                    }

                                })()}


                                </tbody>
                            </table>






                        </div>
                    </div></div></div>

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
        selectDay: selectDay
    },dispatch)

}


export default connect(mapStateToProps,matchDispatchToProps)(SearchForm);
