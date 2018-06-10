import {combineReducers } from 'redux';
import HallReducer from './reducer-halls';
import ActiveHallReducer from './reducer-activehall'
import ActiveDayReducer from './reducer-activeday'
import BookDays from './reducer-bookdays'


const allReducers = combineReducers({
    halls: HallReducer,
    activehall: ActiveHallReducer,
    activeday: ActiveDayReducer,
    bookdays: BookDays
})

export default allReducers;

