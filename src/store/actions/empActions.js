import { SET_ALL_EMP_LIST } from "../../constants/actionsTypes";

export const setAllEmployee = (payload) => ({
    type: SET_ALL_EMP_LIST,
    payload: payload,
  });