import axios from "axios";

const API_URL = "/api/user/";

export const register = async (formData) => {
    const response = await axios.post(API_URL + "register", formData);
    return response.data;
}

