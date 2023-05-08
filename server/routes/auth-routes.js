import { Router } from "express";
import { login, signUp } from "../Controllers/auth-controllers.js";

const userRouter = Router();

//Login Page
userRouter.post("/login", login);

//SignUp Page
userRouter.post("/signup", signUp);

export default userRouter;
