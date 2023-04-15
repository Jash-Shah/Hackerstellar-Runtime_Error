import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import transaction from "../models/transaction.js";
const Transaction = mongoose.model("transaction", transaction);

import connection from "../utils/connection.js";

import dotenv from "dotenv";
dotenv.config();

const transactionRouter = Router();

transactionRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Transaction route connected!" });
});

transactionRouter.post("/register", async (req, res) => {
    try {
        // Get transaction input
        await connection();

        const { username, email, address, password, typeofuser } = req.body;

        // Validate transaction input
        if (!(email && password && username && address && typeofuser)) {
            return res
                .status(400)
                .json({ message: "All information is required!" });
        }

        // check if transaction already exist
        // Validate if transaction exist in our database
        const oldUser = await Transaction.findOne({ username });

        if (oldUser) {
            return res
                .status(409)
                .json({ message: "Username must be unique!" });
        }

        //Encrypt transaction password
        let encryptedPassword = await bcrypt.hash(password, 10);

        // Create transaction in our database
        const transaction = await Transaction.create({
            username,
            address,
            typeofuser,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: transaction._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "30d",
            },
        );
        // save transaction token
        transaction.token = token;

        // return new transaction
        res.status(201).json(transaction);
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
});

transactionRouter.post("/login", async (req, res) => {
    try {
        await connection();
        const { username, password } = req.body;

        // Validate transaction input
        if (!(username && password)) {
            res.status(400).json({
                message: "Username and password are required",
            });
        }

        // Validate if transaction exist in our database
        const transaction = await Transaction.findOne({ username });

        if (
            transaction &&
            (await bcrypt.compare(password, transaction.password))
        ) {
            // Create token
            const token = jwt.sign(
                { user_id: transaction._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "30d",
                },
            );

            // save transaction token
            transaction.token = token;

            // transaction
            res.status(200).json(transaction);
            return;
        }
        res.status(400).json({ message: "Invalid credentials!" });
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
});

transactionRouter.post("/update", async (req, res) => {
    try {
        await connection();
        const { username, password } = req.body;

        // Validate transaction input
        if (!(username && password)) {
            res.status(400).json({
                message: "Update informations are required",
            });
        }

        // Validate if transaction exist in our database
        let transaction = await Transaction.findOne({ username });

        if (
            transaction &&
            (await bcrypt.compare(password, transaction.password))
        ) {
            // Create token
            await Transaction.findOneAndUpdate({ username }, req.body);

            // transaction
            res.status(200).json(transaction);
            return;
        }

        transaction = await Transaction.findOne({ username });
        res.status(400).json({ message: "Invalid credentials!" });

        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
});

export default transactionRouter;
