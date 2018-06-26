import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './../styles/ReserveBtn.css';


import ReservationForm from "./ReservationForm";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'

    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#App')

class ReserveBtn extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,

        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);


    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#0008e4';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }





    render() {
        const {signUpRequest } = this.props;
        return (
            <div >
                <button className="btn btn-success" onClick={this.openModal}>Make Reservation</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="Modal">

                        <button id = "x" onClick={this.closeModal}>
                            X
                        </button>

                        <h2 ref={subtitle => this.subtitle = subtitle}>-----------------<b>Make Reservation</b>-----------------</h2>


                        <ReservationForm />
                    </div>
                </Modal>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return{
        halls: state.halls

    };


}



export default connect(mapStateToProps)(ReserveBtn);
