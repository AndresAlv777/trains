import { injectable } from "tsyringe";

import { IUser, IUserRepository } from "../contracts/user.contract";
import { UserModel } from "../models/user.model";

@injectable()
export class UserRepository implements IUserRepository {
    GetUser(id: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    GetUsers(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    async PostUser(user: IUser): Promise<void> {
        await UserModel.create(user);
    }
    PutUser(user: IUser): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteUser(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
