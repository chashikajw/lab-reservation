import React, { Component} from 'react';
import './../styles/Shedule.css';
import Sidebar from "./Sidebar";
import CalendarC from "./CalendarC";
import Timeslots from "./Timeslots";
import { connect } from 'react-redux';


class Shedule extends Component {

    loaddates(){
        if(true){

            return <h3 className="text-center">
                {this.props.children}</h3>


        }
    }

    render(){
        return(
            <div className= "Timeslots">


                <div className="panel panel-default">
                    <div className="panel panel-primary">

                        <h3 className="text-center">
                            {this.props.children}</h3>



                        <div className="panel-body">


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


export default connect(mapStateToProps)(Shedule);
