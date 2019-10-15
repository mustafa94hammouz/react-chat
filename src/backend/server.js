const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const user = require("./routes/user.route");
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = "mongodb://mhammouz:m123123@ds135068.mlab.com:35068/chat";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/register", user);

let port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
