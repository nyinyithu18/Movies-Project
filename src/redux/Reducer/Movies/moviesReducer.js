import { ActionCrew, ActionPeople, ActionPeopleCast, ActionTVShows, ActionType } from "../../Action/action_type";

const initialState = {
  movies: [
    {},
  ],
  trmovies: {},
  movie: {},
  tvShows : {}
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_MOVIES:
      return { ...initialState, movies : payload };
    case ActionType.TOP_RATED_MOVIES:
      return { ...initialState, trmovies : payload};
    case ActionType.FETCH_TVSHOWS:
      return { ...initialState, tvShows : payload};
    case ActionType.SELECTED_MOVIES:
      return { ...initialState, movie : payload };
    default : return state;
    }
};

const crewInitialState = {
  crews : [
    {}
  ],
  crew : {}
};

export const crewReducer = ( state = crewInitialState , {type,payload}) => {
  switch (type) {
    case ActionCrew.FETCH_CREW:
      return { ...crewInitialState, crews : payload};
    case ActionCrew.SELECT_CREW:
      return { ...crewInitialState, crew : payload};
    default : return state;
  }
}

const peopleInitialState = {
  peoples : [
    {}
  ],
  people : {}
}

export const peopleReducer = ( state = peopleInitialState , {type, payload}) => {
  switch (type) {
    case ActionPeople.FETCH_PEOPLE:
      return { ...peopleInitialState, peoples : payload};
    case ActionPeople.SELECTED_PEOPLE:
      return { ...peopleInitialState, people : payload};
    default : return state;
  }
}

const peopleCastInitialState = {
  peopleCast : [
    {}
  ]
}

export const peopleCastReducer = ( state = peopleCastInitialState , {type,payload}) => {
  switch (type) {
    case ActionPeopleCast.FETCH_PEOPLE_CAST:
      return { ...peopleCastInitialState, peopleCast : payload};
    default : return {state};
  }
}
