import "./App.css";
import WalletSidebar from "./component/Wallet_sidebar/wallet_sidebar";
import Navbar from "./component/navbar/Navbar";
import Context from "./component/context/Context";
import { useState } from "react";
import Footer from "./component/Footer/Footer";

function App() {
  const [walletConnected, IsConnected] = useState(false);

  return (
    <Context.Provider value={{ walletConnected, IsConnected }}>
      <div className="metaportal_fn_main">
        <WalletSidebar />
        <Navbar />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
