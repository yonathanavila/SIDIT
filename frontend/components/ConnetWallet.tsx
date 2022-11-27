import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import { useState } from "react";

const magic: any = new Magic(String(process.env.PUBLISHABLE_API_KEY), {
    network: "goerli",
    locale: "en_US",
    extensions: [new ConnectExtension()]
} as any);
const web3: any = new Web3(magic.rpcProvider);


const ConnectWallet = () => {
    const [account, setAccount] = useState<any>(null);

    const login = async () => {
        web3.eth
            .getAccounts()
            .then((accounts: any) => {
                setAccount(accounts?.[0]);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    const showWallet = () => {
        magic.connect.showWallet().catch((e: any) => {
            console.log(e);
        });
    };

    const disconnect = async () => {
        await magic.connect.disconnect().catch((e: any) => {
            console.log(e);
        });
        setAccount(null);
    };

    return (
        <>
            {!account && (
                <button onClick={login} className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white-900 shadow-sm ring-1 ring-white-900/10 hover:ring-white-900/20">
                    Conectar Wallet
                </button>
            )
            }
            {
                account && (
                    <>
                        <button onClick={showWallet} className="button-row">
                            Show Wallet
                        </button>
                        <button onClick={disconnect} className="button-row">
                            Disconnect
                        </button>
                    </>
                )
            }
        </>
    )
}

export default ConnectWallet