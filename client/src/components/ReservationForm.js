import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {selectHall, signUpRequest} from "../actions";
import classnames from 'classnames';
import './../styles/ReserveBtn.css';
import {bindActionCreators} from "redux";
import axios from "axios/index";




class ReservationForm extends Component {
    constructor() {
        super();

        this.state = {

            Date: moment(),
            email: '',
            hallname: '',
            permissonedby: '',
            reason: '',
            timeto: '',
            timefrom: '',
            is_accepted: false,
            reserve_person: "Chashika",
            errors: {}

        };

        //date picker
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {

        this.setState({errors: {}});
        e.preventDefault();
        axios.post('/api/reservations',  {reservation: this.state})
        .then(res => {
            console.log(res.data);
            this.setState({errors:res.data})
        })


        //this.props.signUpRequest(this.state)


    }


    render() {
        const {errors} = this.state;
        return (
            <div className={classnames("form-group", {'has-error':errors.timefrom})}>

                    <form onSubmit={this.onSubmit}>

                        <div className="form-row">

                            <div className={classnames("form-group", {'has-error':errors.timefrom})}>
                                <label htmlFor="inputState">Hall</label>
                                <select id="inputState" className="form-control" name="hallname" value={this.state.hallname}  onChange={this.onChange}>
                                    <option selected >Hall...</option>

                                    {this.props.halls.map((hall) => <option value={hall.name} >{hall.name}</option>)}


                                </select>
                            </div>

                            <div className={classnames("form-group", {'has-error':errors.timefrom})}>
                                <label htmlFor="inputState">Time (from)</label>
                                <select id="inputState" className="form-control"  name="timefrom" value={this.state.timefrom}  onChange={this.onChange}>
                                    <option >From</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                {errors.timefrom && <span className="help-block">{errors.timefrom}</span>}

                            </div>
                            <div className={classnames("form-group", {'has-error':errors.timefrom})}>
                                <label htmlFor="inputState">to</label>
                                <select id="inputState" className="form-control" value={this.state.timeto}  name="timeto"  onChange={this.onChange}>
                                    <option >To</option>
                                    <option value="1" selected={this.state.timeto == "1"}>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>

                            </div>


                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Date</label>
                                <DatePicker
                                    selected={this.state.Date}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className={classnames("form-group", {'has-error':errors.timefrom})}>
                                <label htmlFor="inputEmail4">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                    name="email"
                                    required
                                    value={this.state.email}></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Permissoned by</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="lecturer name"
                                    id="inputpermissonedby"
                                    onChange={this.onChange}
                                    name="permissonedby"
                                    required
                                    value={this.state.permissonedby}></input>
                            </div>

                        </div>
                        <div className="form-group">
                            <label for="inputReason">Reason</label>
                            <input type="text"
                                   className="form-control"
                                   id="inputAddress"
                                   placeholder="for a meeting"
                                   onChange={this.onChange}
                                   name="reason"
                                   required
                                   value={this.state.reason}></input>
                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
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
        signUpRequest: signUpRequest
    },dispatch)

}




export default connect(mapStateToProps,matchDispatchToProps)(ReservationForm);
