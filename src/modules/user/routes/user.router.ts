import express, { Request, Response } from "express";
import { body, check, param, query } from "express-validator";
import { container } from "../../shared/IoC/container";
import { IUserController } from "../contracts/user.contract";
import { TOKENS } from "../../shared/IoC/tokens";
import { asyncHandler } from "../../shared/helpers/helpers";
import { jwtMiddleware } from "../../shared/middlewares/jwt.middleware";
import { validate } from "../../shared/middlewares/validation.middleware";

const userRouter = express.Router();
const userController = container.resolve<IUserController>(TOKENS.IUserController);

/**
 * @openapi
 * /api/v1/user/create:
 *   post:
 *     tags:
 *       - Usuario
 *     summary: Permite registrar usuarios
 *     description: Permite registrar usuarios
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Authentication"
 *       400:
 *         description: Bad request
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: {message: "An error ocurred"}
 *       401:
 *         description: Unauthorized
 */
userRouter.post("/create", [
    validate([
        body("name").bail().isString().notEmpty(),
        body("lastname").bail().isString().notEmpty(),
        body("email").bail().isEmail().notEmpty(),
        body("password").bail().isString().notEmpty(),
        body("cellphone").bail().isNumeric().notEmpty(),
    ]),
    asyncHandler((req: Request, res: Response) => userController.PostUser(req, res))
]);

export default userRouter;
