import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";
import fileUpload from 'express-fileupload';

dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === "production";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(router);


// / catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// finally, let's start our server...
const API_PORT = process.env.PORT || 3001
 app.listen(API_PORT, () => {
  console.log(`Listening on port ${API_PORT}`);
});

export default app;
