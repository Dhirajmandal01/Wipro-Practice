import React from "react";
import "./NFTCard.css";

const NFTCard = ({ ownerImg, ownerName, creatorImg, creatorName, nftImg, price, usdPrice }) => {
  return (
    <div className="nft-card">
      <div className="nft-header">
        <div className="owner-info">
          <img src={ownerImg} alt="Owner" className="profile-pic" />
          <span>Owned by {ownerName}</span>
        </div>
        <div className="creator-info">
          <img src={creatorImg} alt="Creator" className="profile-pic" />
          <span>Created by {creatorName}</span>
        </div>
      </div>

      <div className="nft-image-container">
        <img src={nftImg} alt="NFT" className="nft-image" />
      </div>

      <div className="nft-footer">
        <p className="nft-price">Price: ETH {price} X1 = (${usdPrice})</p>
        <div className="buttons">
          <button className="history-btn">🔄 View history</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
