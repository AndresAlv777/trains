import { injectable } from "tsyringe";
import { BaseController } from "../../shared/controllers/Base.controller";
import { IAuthController } from "../contracts/auth.contract";
import { Request, Response } from "express";

@injectable()
export class AuthController extends BaseController implements IAuthController{
    Login(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}