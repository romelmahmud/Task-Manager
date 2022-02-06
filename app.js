const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);
//routes
app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Server runinng on port 5000");
  } catch (error) {
    console.log(error);
  }
};

app.listen(5000, () => {});

start();
