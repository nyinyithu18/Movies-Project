import { crewReducer, moviesReducer, peopleCastReducer, peopleReducer, tvShowReducer } from "./Movies/moviesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers ({
    movies : moviesReducer,
    crews : crewReducer,
    people : peopleReducer,
    peopleCast : peopleCastReducer
})

export default reducers;