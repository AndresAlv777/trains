import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { BaseController } from "../../shared/controllers/Base.controller";
import { IUser, IUserController, IUserService } from "../contracts/user.contract";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { TOKENS } from "../../shared/IoC/tokens";

@injectable()
export class UserController extends BaseController implements IUserController {
    constructor(
        @inject(TOKENS.IUserService) private readonly userService: IUserService
    ) { 
        super() 
    }
    GetUser(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }
    GetUsers(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }
    async PostUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = req.body as IUser;
            const result = await this.userService.PostUser(user);
            
            return this.ok<object>(res, result);
        } catch (e) {
            const _e = e as Error;
            return this.unprocessable(res, _e.message);
        }
    }
    PutUser(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }
    DeleteUser(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }
}