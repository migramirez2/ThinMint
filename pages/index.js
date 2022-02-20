import abi from '../utils/TokenGenerator.json';

/* import Head from 'next/head'
import Image from 'next/image' 
import styles from '../styles/Home.module.css'
import { Typography, Paper, Card } from "@mui/material"; */

const Home = () => {
  //Smart Contract Address for TokenGenerator
  const contractAddress = "0xBB9C6603433A117f0c50B9e54Db5E517bFC1B21b";

  //initializes new abi per ethers.js docs recommendation
  const contractABI = abi.abi;

  return (
    <div>
      <h1>If You Can Read This, Celebrate</h1>
    </div>
  )
};

export default Home;
