import WALLETCONNECT from "../../images/walletconnect.png";
import VENLY from "../../images/venly.png";
import COINBASE from "../../images/coinbase.png";
import METAMASK from "../../images/metamask.png";
import "./wallet_sidebar.css";
import WalletItems from "../Sidebar_Crads/Sidebar_Cards";
import Context from "../context/Context";
import { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";

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
}
