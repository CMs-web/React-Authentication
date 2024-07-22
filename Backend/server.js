const express = require("express");
const connectDb = require("./config/db_config");
const app = express();
const cors = require("cors")

require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

// connetDataBase
connectDb()
app.use(cors())

app.get("/", (req, res) => res.send("WELCOME TO AUTH"));

app.use("/api/user", require("./routes/userRoute"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listning on PORT ${PORT}`));
