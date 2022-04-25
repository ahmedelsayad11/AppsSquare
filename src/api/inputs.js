import server from "./server";

export const getAllInputsApi = async () => {
  const response = await server.get(`samples/1`);
  return response.data;
};

export const updateAllInputsApi = async () => {
  const response = await server.get(`applications`);
  return response.data;
};
