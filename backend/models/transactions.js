import { Schema } from "mongoose";

const transaction = new Schema(
    {
        userid: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
            alias: "u",
        },
        amount: {
            type: Number,
            required: true,
            alias: "a",
        },
        manufacturer: {
            type: String,
            alias: "m",
            required: true,
        },
        customer: {
            type: String,
            required: true,
            alias: "c",
        },
    },
    { timestamps: true },
);

export default transaction;
