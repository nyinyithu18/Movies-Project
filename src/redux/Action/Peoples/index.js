import { ActionPeople, ActionPeopleCast } from "../action_type";

export const fetchPeople = (peoples) => {
  return {
    type: ActionPeople.FETCH_PEOPLE,
    payload: peoples,
  };
};

export const selectedPeople = (people) => {
  return {
    type: ActionPeople.SELECTED_PEOPLE,
    payload: people,
  };
};

export const removePeople = (people) => {
  return {
    type: ActionPeople.REMOVE_PEOPLE,
    payload: people,
  };
};

export const fetchPeopleCast = (cast) => {
  return {
    type : ActionPeopleCast.FETCH_PEOPLE_CAST,
    payload : cast
  }
}

export const removePeopleCast = (cast) => {
  return {
    type : ActionPeopleCast.REMOVE_pEOPLE_CAST,
    payload : cast
  }
}
