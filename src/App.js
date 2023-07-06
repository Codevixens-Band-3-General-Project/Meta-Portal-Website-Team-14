import "./App.css";
import WalletSidebar from "./component/Wallet_sidebar/wallet_sidebar";
import Navbar from "./component/navbar/Navbar";
import Context from "./component/context/Context";
import { useState } from "react";

function App() {
  const [walletConnected, IsConnected] = useState(false);

  return (
    <Context.Provider value={{ walletConnected, IsConnected }}>
      <div className="App">
        <WalletSidebar />
        <Navbar />
      </div>
    </Context.Provider>
  );
}

export default App;
