import WALLETCONNECT from "../../images/walletconnect.png";
import VENLY from "../../images/venly.png";
import COINBASE from "../../images/coinbase.png";
import METAMASK from "../../images/metamask.png";
import { Link } from "react-router-dom";
import "./wallet_sidebar.css";
import WalletItems from "./../Wallet_Items/Wallet_items";
import Context from "../context/Context";
import { useContext } from "react";

export default function WalletSidebar() {
  const { walletConnected, IsConnected } = useContext(Context);

  const data = [
    {
      name: "METAMASK",
      img: METAMASK,
    },
    {
      name: "COINBASE",
      img: COINBASE,
    },
    {
      name: "WALLETCONNECT",
      img: WALLETCONNECT,
    },
    {
      name: "VENLY",
      img: VENLY,
    },
  ];

  const sidebarItems = data.map((element) => {
    return (
      <li key={element.name}>
        <WalletItems text={element.name} img={element.img} />
      </li>
    );
  });

  const handleClick = (event) => {
    IsConnected(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={
          walletConnected
            ? "metaportal_fn_wallet_closer active"
            : "metaportal_fn_wallet_closer"
        }
      ></div>
      <div
        className={
          walletConnected
            ? "metaportal_fn_walletbox active"
            : "metaportal_fn_walletbox"
        }
      >
        <Link to="/" className="fn__closer" onClick={handleClick}>
          <span></span>
        </Link>
        <div className="walletbox">
          <div className="title_holder">
            <h3>Connect Wallet</h3>
            <p>
              Connect with one of our available wallet providers or create a new
              one.
            </p>
          </div>

          <div className="list_holder">
            <ul className="metaportal_fn_items">{sidebarItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
