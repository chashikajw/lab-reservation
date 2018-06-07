import React, { Component} from 'react';
import './../styles/Timeslots.css';
import Sidebar from "./Sidebar";
import CalendarC from "./CalendarC";

class Timeslots extends Component {



    render(){
        return(
            <div className= "Timeslots">

                <div className="title">
                    <h2>{this.props.children}</h2>
                </div>

                <table className="table">
                    <thead>
                    <tr>

                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>

                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>

                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Timeslots;