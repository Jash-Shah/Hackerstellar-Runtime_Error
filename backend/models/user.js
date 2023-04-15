import { Schema } from "mongoose";

const user = new Schema(
    {
        username: {
            type: String,
            required: true,
            maxLength: 20,
            unique: true,
            alias: "u",
        },
        email: {
            type: String,
            required: true,
            maxLength: 100,
            alias: "e",
        },
        address: {
            type: String,
            required: true,
            maxLength: 100,
            alias: "a",
        },
        password: {
            type: String,
            required: true,
            maxLength: 100,
            alias: "p",
        },
        typeofuser: {
            type: String,
            required: true,
            maxLength: 20,
            alias: "t",
        },
        token: {
            type: String,
            alias: "to",
        },
    },
    { timestamps: true },
);

export default user;
