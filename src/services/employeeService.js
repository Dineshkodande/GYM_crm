import authAxios from ".";
import { GET_EMPLOYEE } from "./apiEndpoints";

export const getEmployee = async () => {
  try {
    const response = await authAxios.get(GET_EMPLOYEE);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const getEmployeeDetails = async (id) => {
  try {
    const response = await authAxios.get(GET_EMPLOYEE + id);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
