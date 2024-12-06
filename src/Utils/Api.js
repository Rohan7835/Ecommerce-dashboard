import axios from "axios";
import Swal from "sweetalert2";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error || "Something went wrong!",
    });
  }
};
