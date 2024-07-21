import axios from "axios";
const URL = "/api/user";

const register = async (formdata) => {
  const response = await axios.post(URL + "/register", formdata);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};
const login = async (formdata) => {
  const response = await axios.post(URL + "/login", formdata);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const userService = { register, login };

export default userService;
