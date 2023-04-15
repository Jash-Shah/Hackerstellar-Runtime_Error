require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
    solidity: "0.8.18",
    networks: {
        sepolia: {
            url: SEPOLIA_URL,
            accounts: [PRIVATE_KEY],
        },
    },
};

//! Contract address: 0x2DA9CD08D6DF2BeC20F983Bd8e639900eF546a2A
