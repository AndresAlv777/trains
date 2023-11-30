import { Router } from "express";
import authRouter from "./auth/routes/auth.router";
import userRouter from "./user/routes/user.router";
import trainRouter from "./train/routes/train.router";

export const loadModules = (): Router => {
    const mainRouter = Router();

    mainRouter.use("/auth", authRouter);
    mainRouter.use("/user", userRouter);
    mainRouter.use("/train", trainRouter);

    return mainRouter;
}