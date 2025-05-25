import authAxios from ".";

export const login = async (userData) => {
  const body = {
    ...userData,
  };
  try {
    const response = await authAxios.post("", body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
