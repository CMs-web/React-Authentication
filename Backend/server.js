const express = require("express");
const connectDb = require("./config/db_config");
const app = express();

require("dotenv").config();

// connetDataBase
connectDb()

app.get("/", (req, res) => res.send("WELCOME TO AUTH"));

app.use("/api/user", require("./routes/userRoute"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is listning"));
