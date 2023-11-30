import { inject, injectable } from "tsyringe";
import { ITrain, ITrainRepository, ITrainService } from "../contracts/train.contract";
import { TOKENS } from "../../shared/IoC/tokens";
import { log } from "console";

@injectable()
export class TrainService implements ITrainService {

    constructor(
        @inject(TOKENS.ITrainRepository) private readonly trainRepository: ITrainRepository,
    ) {}

    async GetTrain(code: string): Promise<ITrain | object> {
        try {
            const train = await this.trainRepository.GetTrain(code);
            if(train){
                return train;
            }
            return { message: "Object no result found" };
        } catch (error) {
            console.log(error)
            return { message: "An error ocurred" }
        }
    }
    async GetTrains(): Promise<ITrain[] | object> {
        try {
            const train = await this.trainRepository.GetTrains();
            if(train){
                return train;
            }
            return { message: "Object no result found" };
        } catch (error) {
            console.log(error)
            return { message: "An error ocurred" }
        }
    }
    async PostTrain(train: ITrain): Promise<object> {
        try {
            await this.trainRepository.PostTrain(train);
            return { success: true }
        } catch (error) {
            console.log(error)
            return { message: "An error ocurred" }
        }
    }
    async PutTrain(train: ITrain): Promise<object> {
        try {
            await this.trainRepository.PutTrain(train);
            return { success: true }
        } catch (error) {
            console.log(error)
            return { message: "An error ocurred" }
        }
    }
    async DeleteTrain(code: string): Promise<object> {
        try {
            await this.trainRepository.DeleteTrain(code);
            return { success: true }
        } catch (error) {
            console.log(error)
            return { message: "An error ocurred" }
        }
    }
}

