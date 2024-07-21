import axios from "axios";

const URL = "/api/user";

const register = async (formdata) => {
  const response = await axios.post(URL + "/register", formdata);
  return response.data;
};

const userService = { register };

export default userService;
