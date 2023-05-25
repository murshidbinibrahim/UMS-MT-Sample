const express = require("express");
require("dotenv").config();

const app = express();

//importing routers
const userRouter = require("./routes/user-route");

//configure route
app.use("/api/users", userRouter);

//express.json() parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
