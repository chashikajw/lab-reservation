import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './../styles/Sidebar.css';

class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            name: "Chash"
        }
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    changState(state){
        this.state.name = state;
        console.log(this.state.name);
    }


    render() {
        return (
            <div className="Sidebar">

                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {this.props.halls.map((hall,i) => <a key={i} onClick= {() => this.changState({hall})} className="nav-link"  data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{hall}</a>)}


            </div>


                </div>
            </div>
    );
    }
}

export default Sidebar;
