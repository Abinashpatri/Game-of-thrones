import axios from "axios";

const API_URL = "http://127.0.0.1:3002/characters";

export const getData = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling API", error);
  }
};
