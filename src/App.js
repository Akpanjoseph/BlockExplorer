import React,{ useEffect, useState } from 'react'
import { Header } from './components/HeaderSect'
import MintHome from './components/MintHome'
import HeaderSect from './components/HeaderSect'
import { Explorer } from './components/Explorer'
import { ERC721Minter } from './components/ERC721Minter'
import bunzz from "bunzz-sdk";
import { Team } from './components/Team'
import { ERC721Checker } from './components/ERC721Checker'
import { Communities } from './components/Communities'


// env file
const DAPP_ID = process.env.REACT_APP_DAPP_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

export function App() {

  //  states
  const [handler, setHandler] = useState();
  const [userAddress, setUserAddress] = useState("");

  // 
  useEffect(() => {
    setup()
  }, [])

  const setup = async () => {
    const handler = await bunzz.initializeHandler({
      dappId: DAPP_ID,
      apiKey: API_KEY,
    });

    const userAddress = await handler.getSignerAddress();

    console.log(userAddress);
    setUserAddress(userAddress);
    setHandler(handler);
  }
  

  return (
    <div className='main'>
      
      <HeaderSect/>
      <Explorer/>
      <ERC721Minter bunzz={handler} userAddress={userAddress} />
      <Team/>
      <ERC721Checker/>
      <Communities/>
    </div>
  )
}


export default App