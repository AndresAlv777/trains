import { Router } from "express";
import trainRouter from "./train/routes/train.router";

export const loadModules = (): Router => {
    const mainRouter = Router();

    mainRouter.use("/train", trainRouter);

    return mainRouter;
}