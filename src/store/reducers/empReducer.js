import { SET_ALL_EMP_LIST } from "../../constants/actionsTypes";

const initialState = {
  allEmp: [],
};

const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_EMP_LIST:
      return {
        ...state,
        allEmp: action.payload,
      };
    default:
      return state;
  }
};

export default empReducer;
