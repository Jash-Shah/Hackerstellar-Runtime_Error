import mongoose from "mongoose";

const connectionStr =
    "mongodb+srv://vaibhav:Vaibhav%40143@cluster0.nm9w35r.mongodb.net/mongoose";

mongoose.set("strictQuery", true);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(connectionStr, options);
