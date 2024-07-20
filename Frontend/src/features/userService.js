import { axios } from "axios"

const URL = "/api/user"

const register = async (formdata) => {
    try {
        const response = await axios.post(URL + "/register", formdata)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const userService = { register }

export default userService