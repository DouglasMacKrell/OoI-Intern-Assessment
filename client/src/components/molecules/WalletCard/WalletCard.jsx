import React from "react";
import Card from "../../atoms/Card/index";
import Chip from "../../atoms/Chip/index";
import Typography from "@material-ui/core/Typography";
// import usdFormatter from "../../../util/index";
// import cryptoFormatter from "../../../util/index";

const WalletCard = ({ wallets, rate }) => {
  const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const cryptoFormatter = (amount) => {
    return Math.round(amount * 1e5) / 1e5;
  };

  let storedWallets = [];
  let counter = 0;
  if (wallets.length > 0) {
    for (let wallet of wallets) {
      console.log(wallet);
      console.log(rate);
      let convertedBalance;
      if (wallet.balance[2] === "e") {
        convertedBalance = Math.round(wallet.balance * 1e5) / 1e5;
      } else console.log(convertedBalance);
      storedWallets.push(
        <Card key={counter}>
          <Typography variant="h3">Name: {wallet.name}</Typography>
          <Typography gutterBottom color="textSecondary">
            Address: {wallet.address}
            <br />
            Currency: {wallet.currency}
            <br />
            Balance: {wallet.balance}
            <br />
          </Typography>
        </Card>
      );
      counter += 1;
    }
    return <ul>{storedWallets}</ul>;
  }
  return <p>...LOADING</p>;
};

export default WalletCard;
