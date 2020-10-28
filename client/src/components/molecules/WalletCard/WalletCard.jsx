import React from "react";
import Card from "../../atoms/Card/index";
import CardAddress from "../../atoms/Text/CardAddress";
import CardBalance from "../../atoms/Text/CardBalance";
import CardTitle from "../../atoms/Text/CardTitle";
import { usdFormatter, cryptoFormatter } from "../../../util/index";

const WalletCard = ({ wallets, rate }) => {

  let storedWallets = [];
  let counter = 0;

  if (wallets.length > 0) {
    for (let wallet of wallets) {
      console.log(wallet);
      console.log(rate);
      let convertedBalance;
      let exchangeRate = cryptoFormatter(wallet.balance / rate);
      convertedBalance = usdFormatter.format(exchangeRate);
      console.log(convertedBalance);
      storedWallets.push(
        <Card key={counter}>
          <CardTitle>
            NAME: {wallet.name} CURRENCY: {wallet.currency}
          </CardTitle>
          <CardBalance>BALANCE: {convertedBalance}</CardBalance>
          <CardAddress>ADDRESS: {wallet.address}</CardAddress>
        </Card>
      );
      counter += 1;
    }
    return <ul>{storedWallets}</ul>;
  }
  return <p>...LOADING</p>;
};

export default WalletCard;
