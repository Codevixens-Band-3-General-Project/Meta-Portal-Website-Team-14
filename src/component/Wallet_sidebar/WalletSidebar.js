import React, { useContext } from "react";
import WALLETCONNECT from "../../images/walletconnect.png";
import VENLY from "../../images/venly.png";
import COINBASE from "../../images/coinbase.png";
import METAMASK from "../../images/metamask.png";
import "./wallet_sidebar.css";
import WalletItems from "../Wallet_Items/WalletItems";
import Context from "../context/Context";
import Sidebar from "../Sidebar/Sidebar";

const walletSidebar = () => {
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

  const sidebarItems = data.map((element) => (
    <li key={element.name}>
      <WalletItems text={element.name} img={element.img} />
    </li>
  ));

  const handleClick = () => {
    IsConnected(false);
  };
  return (
    <Sidebar
      clickHandler={handleClick}
      active={walletConnected}
      _closer="metaportal_fn_wallet_closer"
      _className="metaportal_fn_walletbox"
      content={
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
      }
    />
  );
};

export default walletSidebar;
