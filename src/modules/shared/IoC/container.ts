
import { container } from "tsyringe";
import { TOKENS } from "./tokens";


import { TrainController } from "../../train/controllers/train.controller";
import { TrainService } from "../../train/services/train.service";
import { TrainRepository } from "../../train/repositories/train.repository";

//Train
container.register(TOKENS.ITrainController, {
	useClass: TrainController,
});
container.register(TOKENS.ITrainService, {
	useClass: TrainService,
});
container.register(TOKENS.ITrainRepository, {
	useClass: TrainRepository,
});
export { container };