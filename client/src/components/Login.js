import React, { Component } from 'react';
import './../styles/Login.css';
import logo from './../images/ucsclogo.jpg';
import moment from "moment/moment";
import axios from "axios/index";
import classnames from "classnames";
import {browserHistory} from 'react-router';

class Login extends Component {

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

        this.setState({errors: {}});
        e.preventDefault();
        axios.post('/api/client/Login',  {userdetails: this.state})
            .then(res => {
                console.log(Object.keys(res.data).length);

                this.setState({errors:res.data});


                //browserHistory.push('/home');

            })
        .then(
            () => {
                browserHistory.push('/home');
            }
        )






        //this.props.signUpRequest(this.state)


    }


    render() {
        const {errors} = this.state;
        return (
            <div className="Login">
                <form className="form-signin" id="signup" onSubmit={this. onSubmit}>
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt=""
                         width="72" height="72"></img>
                    <h1 className="h3 mb-3 font-weight-normal"><b>Login</b></h1>
                    <div className={classnames("form-group", {'has-error':errors.username})}>
                        {errors.username && <span className="help-block">{errors.username}</span>}
                    </div>
                    <div className={classnames("form-group", {'has-error':errors.password})}>
                        {errors.password && <span className="help-block">{errors.password}</span>}
                    </div>



                    <div className={classnames("form-group", {'has-error':errors.username})}>
                        <label className="sr-only" htmlFor="inputUsername">Username</label>
                        <input id="inputUsername" name="email" className="form-control" placeholder="email"  value={this.state.email} onChange={this.onChange}
                               required autoFocus="" type="text"></input>
                    </div>
                    <div className={classnames("form-group", {'has-error':errors.password})}>
                        <label className="sr-only" htmlFor="inputPassword">Password</label>
                        <input id="inputPassword" name="password" className="form-control" value={this.state.password} onChange={this.onChange}
                               placeholder="password" required autoFocus="" type="password"></input>
                    </div>



                    <div className="checkbox mb-3">
                        <label>
                            <input value="remember-me" type="checkbox"></input>
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login
                    </button>
                    <br></br>

                    New User? <a href="/">SignUp</a>


                </form>


            </div>
        );
    }
}

export default Login;
