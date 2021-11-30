require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

//ROUTE IMPORT
const queryRoute = require("./routes/query");

//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//PORT
const port = process.env.port;

//ROUTES
app.use("/api/v1/", queryRoute);

//SERVER
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
