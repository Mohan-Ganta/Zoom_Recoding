import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/auth-routes.js";
import callRouter from "./routes/call-routes.js";

const app = express();
dotenv.config();

const corsOptions ={
  origin:'*', 
  credentials:true, 
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", userRouter);
app.use('/calls',callRouter)

mongoose.connect("mongodb+srv://gantamohan556:ztest2023@ztest.gyesu8l.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log(`Server is connected at 3000`))
  
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

app.use((err, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Somthing Went Wrong!!";
  return res.status(status).json({
    status: false,
    status,
    message,
  });
});