import React, { Component} from 'react';
import './../styles/Shedule.css';
import Sidebar from "./Sidebar";
import CalendarC from "./CalendarC";
import Timeslots from "./Timeslots";

class Shedule extends Component {



    render(){
        return(
            <div className= "Timeslots">


                <div className="panel panel-default">
                    <div className="panel panel-primary">

                        <h3 className="text-center">
                            {this.props.children}</h3>

                        <div className="panel-body">

                        {/*<table className="table table-striped table-condensed">*/}
                    {/*<thead>*/}
                    {/*<tr>*/}

                        {/*<th>Time</th>*/}
                        {/*<th>From</th>*/}
                        {/*<th>To</th>*/}
                        {/*<th>buy</th>*/}

                    {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*<tr>*/}


                        {/*<td>{this.props.children}</td>*/}
                        {/*<td>Cairo</td>*/}
                        {/*<td>Aswan</td>*/}

                        {/*<td><a href="http://www.jquery2dotnet.com" className="btn btn-sm btn-primary btn-block"*/}
                               {/*role="button">buy</a></td>*/}


                    {/*</tr>*/}
                    {/*<tr>*/}


                        {/*<td>8:00 PM</td>*/}
                        {/*<td>Cairo</td>*/}
                        {/*<td>Suez</td>*/}

                        {/*<td><a href="http://www.jquery2dotnet.com" className="btn btn-sm btn-primary btn-block"*/}
                               {/*role="button">buy</a></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}


                        {/*<td>12:00 AM</td>*/}
                        {/*<td>Alexandria</td>*/}
                        {/*<td>Cairo</td>*/}

                        {/*<td><a href="http://www.jquery2dotnet.com" className="btn btn-sm btn-primary btn-block"*/}
                               {/*role="button">buy</a></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}


                        {/*<td>3:00 PM</td>*/}
                        {/*<td>Alexandria</td>*/}
                        {/*<td>Cairo</td>*/}

                        {/*<td><a href="http://www.jquery2dotnet.com" className="btn btn-sm btn-primary btn-block"*/}
                               {/*role="button">buy</a></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}


                        {/*<td>5:00 PM</td>*/}
                        {/*<td>Alexandria</td>*/}
                        {/*<td>Cairo</td>*/}

                        {/*<td><a href="http://www.jquery2dotnet.com" className="btn btn-sm btn-primary btn-block"*/}
                               {/*role="button">buy</a></td>*/}

                    {/*</tr>*/}
                    {/*</tbody>*/}
                {/*</table> */}
            </div>
                    </div></div></div>

        );
    }
}

export default Shedule;