import express, { Request, Response } from "express";
import { body } from "express-validator";
import { container } from "../../shared/IoC/container";
import { TOKENS } from "../../shared/IoC/tokens";
import { IAuthController } from "../contracts/auth.contract";
import { validate } from "../../shared/middlewares/validation.middleware";
import { asyncHandler } from "../../shared/helpers/helpers";
import { jwtMiddleware } from "../../shared/middlewares/jwt.middleware";

const authRouter = express.Router();
const authController = container.resolve<IAuthController>(TOKENS.IAuthController);

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Autenticación
 *     summary: Permite el login de usuarios
 *     description: Permite el login de usuarios
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
authRouter.post('/login',
    [
        jwtMiddleware([]),
        validate([
            body('email').isEmail(),
            body('password').isEmail()
        ]),
        asyncHandler((req: Request, res: Response) => authController.Login(req, res)),
    ]
)

export default authRouter;