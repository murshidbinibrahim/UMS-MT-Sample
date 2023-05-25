const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //If Connection is Successfull , then start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}/`);
    });

    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection failed - " + err);
  });

//middleware
//express.json() parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

//importing routers
const userRouter = require("./routes/user-route");

//configure route
app.use("/api/users", userRouter);
