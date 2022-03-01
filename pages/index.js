import abi from '../utils/TokenGenerator.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Paper, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import styles from '../styles/Home.module.css';


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


      //removed "" eth_accounts
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

  const onNameChange = (e) => {
    setTokenName(e.target.value);
  };

  const onSymbolChange = (e) => {
    setTokenSymbol(e.target.value);
  };

  useEffect(() => {

  }, []);


  if (address !== null && tokenAddress === null) return (
    <Paper className="bg-blue-500 h-screen w-screen flex justify-center item-center">
      <Card className="h-1/2 w-5/6">

      </Card>
    </Paper>    
  )
  else if (tokenAddress !== null ) return (
    <Paper className="bg-blue-500 h-screen w-screen flex justify-center item-center">
          <Card className="h-1/2 w-5/6">
            <CardContent className="flex flex-col justify-between items-center h-full w-full">
              <Typography variant="h4" className="text-center">Generate Token</Typography>
              <Button className="btn bg-blue-500 text-white" onClick={addToken}>Add Token to MetaMask</Button>
            </CardContent>
          </Card>
    </Paper>  
  )
  else if (loading == true && tokenAddress === null) return (
  <Paper className="bg-blue-500 h-screen w-screen flex justify-center item-center">
        <Card className="h-1/2 w-5/6">
          <Typography>Loading...</Typography>
        </Card>
  </Paper>  
  )
  else return (
    <Paper className=" bg-blue-500 h-screen w-screen flex justify-center item-center">
        <Card className="h-1/2 w-5/6">
          <CardContent className="flex flex-col justify-between items-center h-full w-full">
            <Typography variant="h4" className="text-center">
              Generate Token
            </Typography>
            <Button className="btn bg-blue-500 text-white" onClick={connectWallet}>Generate</Button>
            <div></div>
          </CardContent>
        </Card>
    </Paper>  
  )
};

export default Home;
