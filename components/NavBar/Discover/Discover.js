import React,{useState} from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {

  //Wallet Connection Start
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Wallet Found");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "connected with publickey:",
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Get a phantom wallet")
        console.log("Get a phantom wallet");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const connectWallet = async () => {
    checkIfWalletIsConnected();
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("connected with public key", response.publicKey);
      setWalletAddress(response.publicKey.toString());      
    }
  };




  const disconnectWallet = async () => {
    const { solana } = window;
    if (solana) {
      await solana.disconnect();
      setWalletAddress(null);
    }
  };

  connectWallet();
  
  // Wallet Connection End

  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;