import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { BaseController } from "../../shared/controllers/Base.controller";
import { ITrain, ITrainController, ITrainService } from "../contracts/train.contract";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { TOKENS } from "../../shared/IoC/tokens";

@injectable()
export class TrainController extends BaseController implements ITrainController {
    constructor(
        @inject(TOKENS.ITrainService) private readonly trainService: ITrainService
    ) { 
        super() 
    }
    async GetTrain(req: Request, res: Response): Promise<Response> {
        try {
            const code = req.body.code;
            const result = await this.trainService.GetTrain(code);
            
            return this.ok<object>(res, result);
        } catch (e) {
            const _e = e as Error;
            return this.unprocessable(res, _e.message);
        }
    }
    async GetTrains(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.trainService.GetTrains();
            
            return this.ok<object>(res, result);
        } catch (e) {
            const _e = e as Error;
            return this.unprocessable(res, _e.message);
        }
    }
    async PostTrain(req: Request, res: Response): Promise<Response> {
        try {
            const train = req.body as ITrain;
            const result = await this.trainService.PostTrain(train);
            
            return this.ok<object>(res, result);
        } catch (e) {
            const _e = e as Error;
            return this.unprocessable(res, _e.message);
        }
    }
    async PutTrain(req: Request, res: Response): Promise<Response> {
        try {
            const train = req.body as ITrain;
            const result = await this.trainService.PutTrain(train);
            
            return this.ok<object>(res, result);
        } catch (e) {
            const _e = e as Error;
            return this.unprocessable(res, _e.message);
        }
    }
    async DeleteTrain(req: Request, res: Response): Promise<Response> {
        try {
            const code = req.body.code;
            const result = await this.trainService.DeleteTrain(code);
            
            return this.ok<object>(res, result);
        } catch (e) {
            const _e = e as Error;
            return this.unprocessable(res, _e.message);
        }
    }
}