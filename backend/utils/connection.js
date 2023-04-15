import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Connected!"));
};

export default connection;
