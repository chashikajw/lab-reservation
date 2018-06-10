
export const selectHall = (hall) => {
    console.log("you clicked" + hall.name);
    return {
        type: "HALL_SELECTED",
        payload: hall
    }
};

export const selectDay = (date) => {
    console.log("you clicked" + date.toString());
    return {
        type: "DATE_SELECTED",
        payload: date
    }
};