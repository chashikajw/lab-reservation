export default function (state = "LabA", action) {
    switch (action.type){
        case "HALL_SELECTED":
            return action.payload;
            break;
    }
    return state;

}