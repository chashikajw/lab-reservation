import React, { Component } from 'react';
import './../styles/Login.css';
import logo from './../images/ucsclogo.jpg';

class Login extends Component {

    constructor(){
        super();

        this.state = {
            date: new Date(),
            bookings: [],
            month: new Date().getDay()
        }
    }

    componentDidMount() {


        fetch('/api/searchBokkings/W001/2018-06-25T17:51:59.038Z')
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


    render() {
        const {errors} = this.state;
        return (
            <div className="Login">
                <form className="form-signin" id="signup" action="/login" method="POST">
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt=""
                         width="72" height="72"></img>
                        <h1 className="h3 mb-3 font-weight-normal"><b>Sign In</b></h1>
                        <label className="sr-only" htmlFor="inputEmail">Email address</label>
                        <input id="inputEmail" name="email" className="form-control" placeholder="email address"
                               required="" autoFocus="" type="email"></input>
                            <label className="sr-only" htmlFor="inputPassword">Password</label>
                            <input id="inputPassword" name="password" className="form-control" placeholder="password"
                                   required="" autoFocus="" type="password"></input>

                                <div className="checkbox mb-3">
                                    <label>
                                        <input value="remember-me" type="checkbox"></input>
                                            Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>


                </form>


            </div>
        );
    }
}

export default Login;
