import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(signupRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
});
