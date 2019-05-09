import {
  GET_PLAYER, GET_TEAMS, GET_INDIVIDUAL_PLAYER,
} from "../types/restTypes";

const initialState = {
  playerData: [],
  teamData: [],
  dataLoaded: false,
  playerStats: [],
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

    case GET_INDIVIDUAL_PLAYER: 
      console.log('We got individual players');
      console.log(payload);
      return {
        ...state,
        playerStats: payload,
      }
    
    default:
      return state;
  }
}