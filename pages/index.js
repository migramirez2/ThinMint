import abi from '../utils/TokenGenerator.json';
import { ethers } from 'ethers';
import { useState } from 'react';

/* import Head from 'next/head'
import Image from 'next/image' 
import styles from '../styles/Home.module.css'
import { Typography, Paper, Card } from "@mui/material"; */

const Home = () => {
  //Smart Contract Address for TokenGenerator
  const contractAddress = "0xBB9C6603433A117f0c50B9e54Db5E517bFC1B21b";

  //initializes new abi per ethers.js recommendation
  const contractABI = abi.abi;


  //React Hooks
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(null);
  const [tokenName, setTokenName] = useState(null);
  const [tokenSymbol, setTokenSymbol] = useState(null);
  const [tokenAddress, setTokenAddress] = useState(null);

  const checkIfWalletConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Please connect to your MetaMask");
      } else {
        console.log("Object:", ethereum);
      };

      const accounts = await ethereum.request({ "eth_accounts" });

      if (accounts.length !==0) {
        const account = accounts[0];
        console.log("Account Found");
        setAddress(account);
      } else {
        console.log("No Account Found");
      };

     } catch (error) {
        console.error(error);
      };
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask");
        return;
      };

      const accounts = await ethereum.request({ method: eth_request_accounts });
      console.log("Connected", accounts[0]);
      setAddress(accounts[0]);

    } catch (error) {
      console.error(error);
    };
  };

  const generateToken = async () => {
    if (token && tokenSymbol && address) {

      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.provider.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const generateTokenContract = new ethers.Contract(contractAddress, contractABI, signer);
        const out = await generateTokenContract.generateToken(tokenName, tokenSymbol, address);
        setTokenAddress(out);
      };

    } else {
      alert("Please complete all fields.");
    };
  };

  const addToken = async () => {
    if (tokenAddress !== null) {
      try {
        const { ethereum } = window;
        const deployAddress = await tokenAddress.wait();
        deployAddress = deployedAddress.event[0].address;
        const wasAdded = await ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: deployAddress,
              symbol: tokenSymbol,
              decimals: 18,
            },
          },
        });

        if (wasAdded) {
          console.log("Token Successfully Minted");
        } else {
          console.log("Token Not Minted");
        };

      } catch (error) {
        console.error(error);
      };
    } else {
        alert('Please ensure to input all fields, then generate the token');
      }
    };
  };

  

  return (
    <div>
      <h1>If You Can Read This, Celebrate</h1>
    </div>
  )
};

export default Home;
