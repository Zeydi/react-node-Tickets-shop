import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";

import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(signupRouter);

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to db");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
  });
};

start();
