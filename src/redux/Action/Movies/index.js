import { ActionCrew, ActionTVShows, ActionType } from "../action_type"

export const fetchMovies = (movies) => {
    return{
        type : ActionType.FETCH_MOVIES,
        payload : movies
    }
}

export const fetchTrMovies = (movies) => {
    return {
        type : ActionType.TOP_RATED_MOVIES,
        payload : movies
    }
}

export const selectedMovie = (movie) => {
    return{
        type : ActionType.SELECTED_MOVIES,
        payload : movie
    }
}

export const removeSelectedMovie = (movie) => {
    return{
        type : ActionType.REMOVE_SELECTED_MOVIES,
        payload : movie
    }
}

export const fetchCrew = (crews) => {
    return{
        type : ActionCrew.FETCH_CREW,
        payload : crews
    }
}

export const selectCrew = (crew) => {
    return{
        type : ActionCrew.SELECT_CREW,
        payload :crew
    }
}

export const removeCrew = (crew) => {
    return{
        type : ActionCrew.REMOVE_CREW,
        payload : crew
    }
}

export const fetchTvShows = (movies) => {
    return{
        type : ActionType.FETCH_TVSHOWS,
        payload : movies
    }
}