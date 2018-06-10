export default function (state = "cja", action) {
    switch (action.type){
        case "DATE_SELECTED":
            return action.payload;
            break;
    }
    return state;

}