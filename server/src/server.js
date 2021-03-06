const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./controllers/ROUTES");
const db = require("./config/connectDB");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//Connect to database
db.connect();

// Calling body-parser to handle the Request Object from POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use cors to talk to front end
app.use(cors());

//Routes init
route(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
