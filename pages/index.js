import abi from '../utils/TokenGenerator.json'
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Paper, Card, CardContent, Typography, TextField, Button } from '@mui/material';



const Home = () => {
  //Smart Contract Address for TokenGenerator
  const contractAddress = "0xBB9C6603433A117f0c50B9e54Db5E517bFC1B21b";

  //initializes new abi per ethers.js recommendation
  const contractABI = abi.abi;


  //Hooks
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


      const accounts = await ethereum.request({ eth_accounts });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Account Found", accounts);
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

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected", accounts[0]);
      setAddress(accounts[0]);

    } catch (error) {
      console.error(error);
    };
  };

  const generateToken = async () => {
    if (tokenName && tokenSymbol && address) {

      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const generateTokenContract = new ethers.Contract(contractAddress, contractABI, signer);
        const out = await generateTokenContract.generateToken(tokenName, tokenSymbol, address);
        console.log(address)
        setTokenAddress(out);
      };

    } else {
      alert("Please complete all fields.");
    };
  };

  /* addToken TO WALLET IS NOT CURRENTLY CALLED, CAUSES PAGE ISSUES
  const addToken = async () => {
    if (tokenAddress !== null) {
      try {
        const { ethereum } = window;
        const deployAddress = await tokenAddress.wait();
        deployAddress = deployAddress.events[0].address;
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
  END ADDTOKEN */  
  
  const onNameChange = (e) => {
    setTokenName(e.target.value);
  };

  const onSymbolChange = (e) => {
    setTokenSymbol(e.target.value);
  };

  useEffect(() => {

  }, []);

  if (address !== null && tokenAddress === null) return (
    <div id="generate" name="generate" className='generator'>
      <div className="container">
        <div data-aos="fade-up" className="content">
          <h1>Let's <span>Mint</span>!</h1>
          <p>Minting a token on the Ethereum blockchain has never been easier. Enter a Name and 3-4 Letter Symbol for your new Token and let our Smart Contract handle the rest behind the scenes. </p>
          <div className='float-left two-button'>
            <input onChange={onNameChange} type="text" placeholder="Token Name"></input>
            <input onChange={onSymbolChange} type="text" placeholder="Token Symbol"></input>
          </div>
          <button onClick={generateToken} className="button mint-btn">MINT</button>
        </div>
      </div>
    </div>   
  )
  else if (tokenAddress !== null ) return (
    <div id="generate" name="generate" className='generator'>
      <div className="container">
        <div className="content">
          <h1>{tokenName} Was</h1>
          <h1>Successfully <span>Minted</span>.</h1>
          <div className='two-button float-left success'>
            <a href={"https://rinkeby.etherscan.io/tx/" + JSON.stringify(tokenAddress.hash).replace(/\"/g, "")} target="_blank" className="button">VIEW ETHERSCAN</a>
            <a href="." className="button secondcolor">NEW MINT</a>
          </div>
        </div>
      </div>
    </div>  
  )
  else if (loading == true && tokenAddress === null) return (
    <div id="generate" name="generate" className='generator'>
      <div className="container">
        <div className="content">
          <h1>LOADING...</h1>
        </div>
      </div>
    </div> 
  )
  else return (
    <div id="generate" name="generate" className='generator'>
      <div className="container">
        <div className="content">
          <h1>Before We Begin,</h1>
          <h1>Please Connect</h1>
          <h1><span>to MetaMask</span></h1>
          <button onClick={connectWallet} className="button">CONNECT</button>
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default Home;
