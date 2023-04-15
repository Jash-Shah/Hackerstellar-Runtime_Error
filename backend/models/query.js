import { Schema } from "mongoose";

const query = new Schema(
    {
        userid: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
            alias: "u",
        },
        text: {
            type: String,
            required: true,
            maxLength: 200,
            alias: "t",
        },
    },
    { timestamps: true },
);

export default query;
