const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const userRouter = require("./routes/router");
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/users", userRouter);
const PORT = process.env.PORT || 4000;

const boot = async () => {
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
};

boot();
