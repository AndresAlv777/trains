import {model, Schema} from "mongoose";
import { ITrain } from "../contracts/train.contract";

const TrainSchema = new Schema<ITrain>({

    color: {
        type: String,
        required: true,
    },
    doorNumber: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    trainCars: {
        type: Number,
        required: true,
    },
    trainChairs: {
        type: Number,
        required: true,
    },
    trainCapacity: {
        type: Number,
        required: true,
    },
    chairsNumber: {
        type: Number,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },

    
})

TrainSchema.index({code: 1})

export const TrainModel = model<ITrain>("train", TrainSchema)

