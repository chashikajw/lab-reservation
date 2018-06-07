import React, { Component } from 'react';
import './../styles/Header.css';
import logo from './../images/ucsclogo.jpg';

class Header extends Component {
    // state = {
    //     response: ''
    // };
    //
    // componentDidMount() {
    //     this.callApi()
    //         .then(res => this.setState({ response: res.express }))
    //         .catch(err => console.log(err));
    // }
    //
    // callApi = async () => {
    //     const response = await fetch('/api/hello');
    //     const body = await response.json();
    //
    //     if (response.status !== 200) throw Error(body.message);
    //
    //     return body;
    // };

    render() {
        return (
            <div className="Header">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="logo">
                    <img src={logo} width="70" height="70" />
                    </div>
                    <a className="navbar-brand" href="#">UCSC Lab reservation Center</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                </nav>
            </div>
    );
    }
}

export default Header;
