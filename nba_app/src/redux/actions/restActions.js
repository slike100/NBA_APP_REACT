import {
  GET_PLAYER,
  GET_TEAMS,
} from "../types/restTypes";

import Axios from "axios";

export const getPlayerData = () => {
  return dispatch => {
    return Axios
    .get('http://localhost:3001/nba/')
    .then(res => {
      const action = {
        type: GET_PLAYER,
        payload: res.data.league.standard,
      }
      dispatch(action);
    })
    .catch(err => console.log(err))
  }
}

export const getTeamData = () => {
  return dispatch => {
    return Axios
    .get('http://localhost:3001/nba/teams')
    .then(res => {
      var teams = []
      for(let i = 0; i < res.data.league.standard.length; i++) {
        if(res.data.league.standard[i].isNBAFranchise){
          teams.push(res.data.league.standard[i]);
        }
      }
      const action = {
        type: GET_TEAMS,
        payload: teams,
      }
      dispatch(action);
    })
    .catch(err => console.log(err))
  }
}
