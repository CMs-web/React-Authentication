const User = require("../model/userModel")
const bcrypt = require("bcrypt")

const register = async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({msg : "please fill all fields"})
    }

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)

    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })

    return res.status(200).json(user).select("-password")
}

const login = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({msg : "please fill all fields"})
    }

    const user = await User.find({ email })

    if (user && bcrypt.compareSync(password, user.password)) {
      return res.status(200).json(user).select("-password");
    } else {
      return res.status(404).json({
        msg: "Try to Register First",
      });
    }
}

module.exports = {register, login}