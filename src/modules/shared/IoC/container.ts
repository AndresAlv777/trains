import { IUserRepository } from './../../user/contracts/user.contract';
import { container } from "tsyringe";
import { TOKENS } from "./tokens";
import { AuthController } from "../../auth/controllers/auth.controller";
import { AuthService } from "../../auth/services/auth.service";

import { UserController } from "../../user/controllers/user.controller";
import { UserService } from "../../user/services/user.service";
import { UserRepository } from "../../user/repositories/user.repository";

import { TrainController } from "../../train/controllers/train.controller";
import { TrainService } from "../../train/services/train.service";
import { TrainRepository } from "../../train/repositories/train.repository";

//Auth
container.register(TOKENS.IAuthController, {
	useClass: AuthController,
});
container.register(TOKENS.IAuthService, {
	useClass: AuthService,
});

//User
container.register(TOKENS.IUserController, {
	useClass: UserController,
});
container.register(TOKENS.IUserService, {
	useClass: UserService,
});
container.register(TOKENS.IUserRepository, {
	useClass: UserRepository,
});

//User
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