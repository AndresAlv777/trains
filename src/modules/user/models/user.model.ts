import {model, Schema} from "mongoose";
import { IUser } from "../contracts/user.contract";

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cellphone: Number,
    isActive: {
        type: Boolean,
        default: true,
    },
})

UserSchema.index({dni: 1})

export const UserModel = model<IUser>("users", UserSchema)

