import {
  CHANGE_STATE,
} from "../types/restTypes";

export const changeStateTest = () => {
  console.log('ChangeStateAction');
  return {
    type: CHANGE_STATE,
  }
}