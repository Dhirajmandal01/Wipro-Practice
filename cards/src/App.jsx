import React from "react";
import NFTCard from "./components/NFTCard";
import "./App.css";

const nftData = [
  {
    ownerImg: "https://randomuser.me/api/portraits/women/1.jpg",
    ownerName: "5811EX",
    creatorImg: "https://randomuser.me/api/portraits/men/1.jpg",
    creatorName: "45TY87",
    nftImg: "/images/download.jpg",
    price: "5.65",
    usdPrice: "10,344",
  },
  {
    ownerImg: "https://randomuser.me/api/portraits/women/2.jpg",
    ownerName: "23WCFV",
    creatorImg: "https://randomuser.me/api/portraits/men/2.jpg",
    creatorName: "ST5664",
    nftImg: "/images/images.jpg",
    price: "4.65",
    usdPrice: "8,709.64",
  },
];

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Rare NFT</h1>
      <div className="nft-container">
        {nftData.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
}

export default App;
