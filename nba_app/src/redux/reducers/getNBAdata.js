import {
  CHANGE_STATE, GET_PLAYER,
} from "../types/restTypes";

const initialState = {
  testing: 1,
  playerData: '',
}

export default function restInterfaceReducer(state = initialState, action) {
  const { type, payload } = action;

  // switch over the action's type and return the appropriate updated copy of our state
  switch (type) {
    case CHANGE_STATE:
      console.log('changing state reducer');
      return {
        ...state, testing: state.testing + 1
      }
    
    case GET_PLAYER:
      console.log('we got so many players!');
      console.log(payload)
      return {
        ...state, playerData: payload,
      }
    
    default:
      return state;
  }
}