import { injectable } from "tsyringe";

import { ITrain, ITrainRepository } from "../contracts/train.contract";
import { TrainModel } from "../models/train.model";

@injectable()
export class TrainRepository implements ITrainRepository {
    async GetTrain(code: string): Promise<ITrain | null> {
        const train = await TrainModel.findOne({"code":code});
        return train;
    }
    async GetTrains(): Promise<ITrain[]> {
        const train = await TrainModel.find({"isActive":true});
        return train;
    }
    async PostTrain(train: ITrain): Promise<void> {
        await TrainModel.create(train);
    }
    async PutTrain(train: ITrain): Promise<void> {
        await TrainModel.findOneAndUpdate({code: train.code},train);
    }
    async DeleteTrain(code: string): Promise<void> {
        await TrainModel.findOneAndUpdate({code: code},{isActive: false});
    }
}
