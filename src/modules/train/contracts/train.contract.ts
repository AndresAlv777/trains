import { Request, Response } from "express";

export interface ITrain {
    color: string;
    doorNumber: number;
    type: string;
    trainCars: number;
    trainChairs: number;
    trainCapacity: number;
    chairsNumber: number;
    code: string;
    isActive?:Boolean

}

export interface ITrainController {
    GetTrain(req: Request, res: Response): Promise<Response>;
    GetTrains(req: Request, res: Response): Promise<Response>;
    PostTrain(req: Request, res: Response): Promise<Response>;
    PutTrain(req: Request, res: Response): Promise<Response>;
    DeleteTrain(req: Request, res: Response): Promise<Response>;
}

export interface ITrainService {
    GetTrain(code: string): Promise<ITrain | object>;
    GetTrains(): Promise<ITrain[] | object>;
    PostTrain(Train: ITrain): Promise<object>;
    PutTrain(Train: ITrain): Promise<object>;
    DeleteTrain(code: string): Promise<object>;
}

export interface ITrainRepository {
    GetTrain(code: string): Promise<ITrain | null>;
    GetTrains(): Promise<ITrain[] | object>;
    PostTrain(Train: ITrain): Promise<void>;
    PutTrain(Train: ITrain): Promise<void>;
    DeleteTrain(code: string): Promise<void>;
}