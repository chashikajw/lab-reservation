import React, {Component} from 'react';



class ReserveBtn extends Component{
    render(){
        return(
            <div className="Reservebtn">

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

                <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            ...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReserveBtn;