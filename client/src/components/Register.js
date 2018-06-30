import React, { Component } from 'react';
import './../styles/Register.css';
import logo from './../images/ucsclogo.jpg';
import moment from "moment/moment";
import axios from "axios/index";
import classnames from "classnames";
import {browserHistory} from 'react-router';

class Register extends Component {

    constructor() {
        super();

        this.state = {


            email: '',
            username: '',
            password: '',
            name: '',
            passwordconf: '',
            isLoading: false,
            errors: {}

        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isvalid = this.isvalid.bind(this);
    }

    isvalid(){

        if(this.state.password == this.state.passwordconf){
            this.setState({errors: {"password": "password is not maching"}});
            return false;
        }
        return true;



    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }



    onSubmit(e) {

            this.setState({errors: {}, isLoading:true});
            e.preventDefault();
            axios.post('/api/client/register',  {userdetails: this.state})
                .then(res => {
                   console.log(res.data);
                   this.setState({errors:res.data, isLoading: false});
                   console.log(res.data);
                   //browserHistory.push('/home');

       })
               /* .then(
                    () => {
                        browserHistory.push('/home');
                    }
                )*/






        //this.props.signUpRequest(this.state)


    }


    render() {
        const {errors} = this.state;
        return (
            <div className="Register">
                <form className="form-signin" id="signup" onSubmit={this. onSubmit}>
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt=""
                         width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal"><b>Sign Up</b></h1>
                    <div className={classnames("form-group", {'has-error':errors.username})}>
                        {errors.username && <span className="help-block">{errors.username}</span>}
                    </div>
                    <div className={classnames("form-group", {'has-error':errors.password})}>
                        {errors.password && <span className="help-block">{errors.password}</span>}
                    </div>


                    <div className={classnames("form-group", {'has-error':errors.username})}>
                        <label className="sr-only" htmlFor="inputEmail">Email address</label>
                        <input id="inputEmail" name="email" className="form-control" placeholder="email address" name="email"  value={this.state.email} onChange={this.onChange}
                               required autoFocus="" type="email"></input>
                    </div>

                    <div className={classnames("form-group", {'has-error':errors.username})}>
                        <label className="sr-only" htmlFor="inputUsername">Username</label>
                            <input id="inputUsername" name="username" className="form-control" placeholder="username" name="username"  value={this.state.username} onChange={this.onChange}
                                   required autoFocus="" type="text"></input>
                    </div>
                    <div className={classnames("form-group", {'has-error':errors.password})}>
                                <label className="sr-only" htmlFor="inputPassword">Password</label>
                                <input id="inputPassword" name="password" className="form-control" value={this.state.password} onChange={this.onChange}
                                       placeholder="password" required autoFocus="" type="password"></input>
                    </div>
                    <div className={classnames("form-group", {'has-error':errors.password})}>
                                    <label className="sr-only" htmlFor="inputPasswordConf">Password</label>
                                    <input id="inputPasswordConf" name="passwordConf" value={this.state.passwordConf} className="form-control" onChange={this.onChange}
                                           placeholder="confirm password" required autoFocus="" type="password"></input>
                    </div>


                                        <div className="checkbox mb-3">
                                            <label>
                                                <input value="remember-me" type="checkbox"></input>
                                                    Remember me
                                            </label>
                                        </div>
                                        <button disabled={this.state.isLoading} className="btn btn-lg btn-primary btn-block" type="submit">Sign In
                                        </button>
                    <br></br>

                                            Already sign up? <a href="/signin">Login</a>


                </form>


            </div>
        );
    }
}

export default Register;
