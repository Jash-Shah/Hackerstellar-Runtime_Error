import { model } from "mongoose";
import user from "./user.js";
import query from "./query.js";
import transaction from "./transaction.js";

// environment variables
import dotenv from "dotenv";
dotenv.config();

// connection to database
import connection from "../utils/connection.js";

const User = new model("user", user);
const Query = new model("query", query);
const Transaction = new model("transaction", transaction);

User.createCollection().then(() => console.log("user collection is created!"));
Query.createCollection().then(() =>
    console.log("query collection is created!"),
);
Transaction.createCollection().then(() =>
    console.log("transaction collection is created!"),
);
