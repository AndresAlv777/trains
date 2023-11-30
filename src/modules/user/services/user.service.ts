import { inject, injectable } from "tsyringe";
import { IUser, IUserRepository, IUserService } from "../contracts/user.contract";
import { TOKENS } from "../../shared/IoC/tokens";

@injectable()
export class UserService implements IUserService {

    constructor(
        @inject(TOKENS.IUserRepository) private readonly userRepository: IUserRepository,
    ) {}

    GetUser(id: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    GetUsers(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    async PostUser(user: IUser): Promise<object> {
        try {
            await this.userRepository.PostUser(user);
            return { success: true }
        } catch (error) {
            return { message: "An error ocurred" }
        }
    }
    PutUser(user: IUser): Promise<object> {
        throw new Error("Method not implemented.");
    }
    DeleteUser(id: string): Promise<object> {
        throw new Error("Method not implemented.");
    }
}

