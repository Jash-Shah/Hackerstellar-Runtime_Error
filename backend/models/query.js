import { Schema } from "mongoose";

const query = new Schema(
    {
        username: {
            type: String,
            ref: "user",
            required: true,
            alias: "u",
        },
        title: {
            type: String,
            required: true,
            maxLength: 100,
            alias: "t",
        },
        description: {
            type: String,
            required: true,
            maxLength: 200,
            alias: "d",
        },
        images: {
            type: String,
            required: false,
            maxLength: 100,
            alias: "i",
        },
    },
    { timestamps: true },
);

export default query;
