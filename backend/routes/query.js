import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import multer from "multer";

import query from "../models/query.js";
const Query = mongoose.model("query", query);

import connection from "../utils/connection.js";

import dotenv from "dotenv";
dotenv.config();

const queryRouter = Router();

// multer storage
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/query");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${req.body.username}-${req.body.title}.${ext}`);
    },
});

const upload = multer({ storage: multerStorage });

queryRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Query route connected!" });
});

queryRouter.post("/", upload.single("image"), async (req, res) => {
    try {
        await connection();
        const { username, title, description } = req.body;

        // Validate query input
        if (!(username && title && description)) {
            return res
                .status(400)
                .json({ message: "All information is required!" });
        }

        // Validate if query exist in our database
        const oldUser = await Query.findOne({ username, title });

        if (oldUser) {
            return res.status(403).json({
                message: "You already have queried, wait for response!",
            });
        }

        const images = `${req.body.username}-${req.body.title}`;

        await Query.create({
            username,
            title,
            description,
            images,
        });
        res.status(201).json({ message: "Query sent successfully!" });
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
});

queryRouter.post("/login", async (req, res) => {
    try {
        await connection();
        const { username, password } = req.body;

        // Validate query input
        if (!(username && password)) {
            res.status(400).json({
                message: "Username and password are required",
            });
        }

        // Validate if query exist in our database
        const query = await Query.findOne({ username });

        if (query && (await bcrypt.compare(password, query.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: query._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "30d",
                },
            );

            // save query token
            query.token = token;

            // query
            res.status(200).json(query);
            return;
        }
        res.status(400).json({ message: "Invalid credentials!" });
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
});

export default queryRouter;
