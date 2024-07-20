const { register, login } = require("../controllers/userController")
const express = require("express")

const routes = express.Router()

routes.post("/register", register)
routes.post("/register", login)

module.exports = routes