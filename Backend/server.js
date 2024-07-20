const express = require("express")
const app = express()

require("dotenv").config()

app.get("/", (req, res) => res.json({ "msg": "WELCOME TO AUTH"}))



const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log('Server is listning'))




