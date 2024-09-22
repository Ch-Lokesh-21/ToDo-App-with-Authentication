const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api",routes);
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
