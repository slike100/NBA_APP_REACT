import {
  CHANGE_STATE,
  GET_PLAYER,
} from "../types/restTypes";

import Axios from "axios";
import store from "../store";


export const changeStateTest = () => {
  console.log('ChangeStateAction');
  return {
    type: CHANGE_STATE,
  }
}

export const getPlayerData = () => {
  console.log('Got a player');
  Axios
    .get('http://localhost:3001/nba/')
    .then(res => {
      const action = {
        type: GET_PLAYER,
        payload: res.data.league.standard,
      }
      store.dispatch(action);
    })
    .catch(err => console.log(err))
}
