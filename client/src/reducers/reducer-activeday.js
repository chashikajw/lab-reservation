export default function (state = "no date", action) {
    switch (action.type){
        case "DATE_SELECTED":
            return action.payload;
            break;
    }
    return state;

}