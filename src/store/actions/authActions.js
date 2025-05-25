import { SET_IS_AUTHENTICATED } from "../../constants/actionsTypes";

export const setAuth = (payload) => ({
    type: SET_IS_AUTHENTICATED,
    payload: payload,
  });