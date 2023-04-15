import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import axios from "axios";
import { dirname } from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Routes
import queryRouter from "./routes/query.js";
import transactionRouter from "./routes/transaction.js";
import userRouter from "./routes/user.js";

// dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// dotenv
dotenv.config();

// express
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// for query route applying public

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// route definition
app.use("/user", userRouter);
app.use("/query", queryRouter);
app.use("/transaction", transactionRouter);

// basic setup check
app.get("/", async (req, res) => {
    res.status(200).json({ message: "API is working!" });
});

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
