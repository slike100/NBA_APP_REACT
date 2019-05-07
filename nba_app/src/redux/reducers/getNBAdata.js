import {
  GET_PLAYER, GET_TEAMS
} from "../types/restTypes";

const initialState = {
  playerData: [],
  teamData: [],
  dataLoaded: false,
}

export default function restInterfaceReducer(state = initialState, action) {
  const { type, payload } = action;

  // switch over the action's type and return the appropriate updated copy of our state
  switch (type) {
    case GET_PLAYER:
      console.log('We Got So Many Players!');
      console.log(payload)
      return {
        ...state, 
        playerData: payload,
        dataLoaded: true,
      }

    case GET_TEAMS:
      console.log('We Got Teams');
      console.log(payload);
      return {
        ...state,
        teamData: payload,
      }
    
    default:
      return state;
  }
}