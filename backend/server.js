const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //If Connection is Successfull , then start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/`);
    });

    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection failed - " + err);
  });

//middleware
//express.json() parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

//importing routers
const userRouter = require("./routes/user-route");

//configure route
app.use("/api/users", userRouter);
