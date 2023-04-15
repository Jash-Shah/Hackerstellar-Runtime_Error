import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import user from "../models/user.js";
const User = mongoose.model("user", user);

import connection from "../utils/connection.js";

import dotenv from "dotenv";
dotenv.config();

connection();

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({ message: "User route connected!" });
});

userRouter.post("/register", async (req, res) => {
    try {
        // Get user input
        const { username, email, address, password, typeofuser } = req.body;

        // Validate user input
        if (!(email && password && username && address && typeofuser)) {
            return res
                .status(400)
                .json({ message: "All information is required!" });
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ username });

        if (oldUser) {
            return res
                .status(409)
                .json({ message: "Username must be unique!" });
        }

        //Encrypt user password
        let encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            username,
            address,
            typeofuser,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "30d",
            },
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate user input
        if (!(username && password)) {
            res.status(400).json({
                message: "Username and password are required",
            });
        }

        // Validate if user exist in our database
        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "30d",
                },
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
            return;
        }
        res.status(400).json({ message: "Invalid credentials!" });
    } catch (err) {
        console.log(err);
    }
});

userRouter.post("/update", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate user input
        if (!(username && password)) {
            res.status(400).json({
                message: "Update informations are required",
            });
        }

        // Validate if user exist in our database
        let user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            await User.findOneAndUpdate({ username }, req.body);

            // user
            res.status(200).json(user);
            return;
        }

        user = await User.findOne({ username });
        res.status(400).json({ message: "Invalid credentials!" });
    } catch (err) {
        console.log(err);
    }
});

export default userRouter;
