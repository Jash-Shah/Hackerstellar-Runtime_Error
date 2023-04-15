import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contract/config.js";
import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "ethers";

function App() {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });

    const [count, setcount] = useState(0);
    const [account, setAccount] = useState("None");
    useEffect(() => {
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

                    const provider = new ethers.providers.Web3Provider(
                        ethereum,
                    );
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(
                        CONTRACT_ADDRESS,
                        CONTRACT_ABI,
                        signer,
                    );
                    setAccount(account);
                    setState({ provider, signer, contract });

                    let x = await contract.productCount();
                    x = x.toNumber();
                    setcount(x);
                } else {
                    alert("Please install metamask!!");
                }
            } catch (error) {
                console.log(error);
            }
        };
        connectWallet();
    }, []);

    console.log(state);
    return (
        <div style={{ backgroundColor: "red", height: "100%" }}>
            <p
                className="text-muted lead"
                style={{ marginTop: "10px", marginLeft: "5px" }}>
                <small>Connected Account - {account}</small>
            </p>
            <div className="container">{count}</div>
        </div>
    );
}

export default App;
