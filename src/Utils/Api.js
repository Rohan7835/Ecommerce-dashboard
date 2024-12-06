import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const apiCall = async (method, endpoint, data = null) => {
  try {
    const response = await apiInstance({
      method: method,
      url: endpoint,
      data: data,
    });

    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error; // throw the error for further handling
  }
};
