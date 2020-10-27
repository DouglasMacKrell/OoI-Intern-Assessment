import React from "react";
import Card from "../../atoms/Card/index";

const WalletCard = ({ wallets, rate }) => {
  let storedWallets = [];
  if (wallets.length > 0) {
    for (let wallet of wallets) {
      storedWallets.push(<Card>Content</Card>);
    }
    return <ul>{storedWallets}</ul>;
  }
  return <p>...LOADING</p>;
};

export default WalletCard;
