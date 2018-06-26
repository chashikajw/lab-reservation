import axios from 'axios';

export const selectHall = (hall) => {
    console.log("you clicked" + hall.name);
    return {
        type: "HALL_SELECTED",
        payload: hall
    }
};

export const selectDay = (date) => {
    console.log("you clicked" + "fuudu");
    return {
        type: "DATE_SELECTED",
        payload: date
    }
};

export const signUpRequest = (userData) => {
    console.log("data submitted" ,userData);
    return {
        type: "DATA_SUBMITTED",
        payload: userData
    }
};

