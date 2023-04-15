import express from "express";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

// database connection
import "./utils/connection.js";
import mongoose, { Schema, model } from "mongoose";

// redis session store
import redis from "redis";
import RedisStore from "connect-redis";

// Routes

// dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// dotenv
dotenv.config();

// express
var app = express();

// important for axios requests
axios.defaults.withCredentials = true;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(
    morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, "content-length"),
            "-",
            tokens["response-time"](req, res),
            "ms",
        ].join(" ");
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// session
app.set("trust proxy", 1);
let redisClient = redis.createClient({ host: "localhost", port: 6000 });

// Initialize sesssion storage.
const IN_PROD = process.env.NODE_ENV === "production";
const TWO_HOURS = 1000 * 60 * 60 * 2;

const sessionStore = new RedisStore({ client: redisClient });

app.use(
    session({
        name: process.env.SESS_NAME,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        secret: "HELLO",
        cookie: {
            maxAge: TWO_HOURS,
            sameSite: true,
            secure: IN_PROD,
        },
    }),
);
await redisClient.connect();
// models

// route definition
app.get("/", async (req, res) => {
    await redisClient.set("name", "Vaibhav");
    res.status(200).json({ message: "API is working!" });
});

app.get("/add", (req, res) => {
    const userSchema = new Schema({
        name: String,
        password: String,
    });
    const user = new model("User", userSchema);
    const firstuser = new user();
    firstuser.name = "Vaibhav Patel";
    firstuser.password = "password";
    firstuser.save();

    res.redirect("/");
});

app.get("/getname", async (req, res) => {
    let val = await redisClient.get("name");
    res.json({ message: val });
});

//* Database
// const userSchema = new Schema({
//     name: String,
//     password: String,
// });

// const user = new model("User", userSchema);

// const firstuser = new user();

// firstuser.name = "Vaibhav Patel";
// firstuser.password = "password";
// firstuser.save();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).json({ message: "Not Found" });
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    console.log(err);
    res.render("error", { logged: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Successfully listening on port ${PORT}!`);
});
