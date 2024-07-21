const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please fill all fields" });
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    return res.status(400).json({'msg' : "user already Exists"})
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    const userObject = user.toObject();
    delete userObject.password;
    return res.status(200).json(userObject);
  } else {
    return res.status(400).json({ msg: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "please fill all fields" });
  }

  const user = await User.find({ email }).select("-password");

  if (user && bcrypt.compareSync(password, user.password)) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({
      msg: "invalid Credentials",
    });
  }
};

module.exports = { register, login };
