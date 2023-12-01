import express, { Request, Response } from "express";
import { body, check, param, query } from "express-validator";
import { container } from "../../shared/IoC/container";
import { ITrainController } from "../contracts/train.contract";
import { TOKENS } from "../../shared/IoC/tokens";
import { asyncHandler } from "../../shared/helpers/helpers";
import { jwtMiddleware } from "../../shared/middlewares/jwt.middleware";
import { validate } from "../../shared/middlewares/validation.middleware";

const trainRouter = express.Router();
const trainController = container.resolve<ITrainController>(TOKENS.ITrainController);

/**
 * @openapi
 * /api/v1/train/create:
 *   post:
 *     tags:
 *       - Train
 *     summary: Permite registrar trenes
 *     description: Permite registrar trenes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *        application/json:    # Media type
 *          schema:            # Request body contents
 *            $ref: '#/components/schemas/Train'   # Reference to an object
 *          example:           # Child of media type because we use $ref above
 *            # Properties of a referenced object
 *            color: "Verde"
 *            doorNumber: 20
 *            type: "Linea 1"
 *            trainCars: 10
 *            trainChairs: 250
 *            trainCapacity: 1500
 *            code: "4978200"
 *            chairsNumber: 250
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Train"
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
trainRouter.post("/create", [
    validate([
        body("color").bail().isString().notEmpty(),
        body("doorNumber").bail().isNumeric().notEmpty(),
        body("type").bail().isString().notEmpty(),
        body("trainCars").bail().isNumeric().notEmpty(),
        body("code").bail().isString().notEmpty(),
        body("trainChairs").bail().isNumeric().notEmpty(),
        body("trainCapacity").bail().isNumeric().notEmpty(),
        body("chairsNumber").bail().isNumeric().notEmpty()
    ]),
    asyncHandler((req: Request, res: Response) => trainController.PostTrain(req, res))
]);
/**
 * @openapi
 * /api/v1/train/update:
 *   put:
 *     tags:
 *       - Train
 *     summary: Permite actualizar trenes
 *     description: Permite actualizar trenes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *        application/json:    # Media type
 *          schema:            # Request body contents
 *            $ref: '#/components/schemas/Train'   # Reference to an object
 *          example:           # Child of media type because we use $ref above
 *            # Properties of a referenced object
 *            color: "Verde"
 *            doorNumber: 20
 *            type: "Linea 1"
 *            trainCars: 10
 *            trainChairs: 250
 *            trainCapacity: 1500
 *            code: "4978167"
 *            chairsNumber: 250
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Train"
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
trainRouter.put("/update", [
    validate([
        body("color").bail().isString().notEmpty(),
        body("doorNumber").bail().isNumeric().notEmpty(),
        body("type").bail().isString().notEmpty(),
        body("trainCars").bail().isNumeric().notEmpty(),
        body("code").bail().isString().notEmpty(),
        body("trainChairs").bail().isNumeric().notEmpty(),
        body("trainCapacity").bail().isNumeric().notEmpty(),
        body("chairsNumber").bail().isNumeric().notEmpty()
    ]),
    asyncHandler((req: Request, res: Response) => trainController.PutTrain(req, res))
]);
/**
 * @openapi
 * /api/v1/train/get:
 *   get:
 *     tags:
 *       - Train
 *     summary: Permite obtener trenes
 *     description: Permite obtener trenes
 *     security:
 *       basicAuth: []
 *     parameters:
 *       - in: query
 *         name: code
 *         description: código
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Train"
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
trainRouter.get("/get", [
    validate([
        query("code").bail().isString().notEmpty(),
    ]),
    asyncHandler((req: Request, res: Response) => trainController.GetTrain(req, res))
]);
/**
 * @openapi
 * /api/v1/train/all:
 *   get:
 *     tags:
 *       - Train
 *     summary: Permite listar trenes
 *     description: Permite listar trenes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Train"
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
trainRouter.get("/all", [
    asyncHandler((req: Request, res: Response) => trainController.GetTrains(req, res))
]); 
/**
 * @openapi
 * /api/v1/train/delete:
 *   post:
 *     tags:
 *       - Train
 *     summary: Permite borrar trenes
 *     description: Desactiva el tren indicado
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *        application/json:    # Media type
 *          schema:            # Request body contents
 *            $ref: '#/components/schemas/Train'   # Reference to an object
 *          example:           # Child of media type because we use $ref above
 *            # Properties of a referenced object
 *            code: "4978165"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Train"
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
trainRouter.post("/delete", [
    validate([
        body("code").bail().isString().notEmpty(),
    ]),
    asyncHandler((req: Request, res: Response) => trainController.DeleteTrain(req, res))
]);
export default trainRouter;
