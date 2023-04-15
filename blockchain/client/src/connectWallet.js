import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contract/config.js";
import { ethers } from "ethers";

const connectWallet = async () => {
    try {
        const { ethereum } = window;

        if (ethereum) {
            const account = await ethereum.request({
                method: "eth_requestAccounts",
            });

            window.ethereum.on("chainChanged", () => {
                window.location.reload();
            });

            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                CONTRACT_ADDRESS,
                CONTRACT_ABI,
                signer,
            );

            return {
                account,
                provider,
                contract,
                signer,
            };
        } else {
            alert("Please install metamask!!");
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectWallet;
