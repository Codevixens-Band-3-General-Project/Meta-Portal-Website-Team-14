import "./App.css";
import WalletSidebar from "./component/Wallet_sidebar/wallet_sidebar";
import Navbar from "./component/navbar/Navbar";
import Context from "./component/context/Context";
import { useState } from "react";
import Footer from "./component/Footer/Footer";
import LeftSidebar from "./component/Left_sidebar/LeftSidebar";
import Contact from "./component/ContactSection/Contact";
import SectionDivider from "./component/SectionDivider/SectionDivider";

function App() {
  const [walletConnected, IsConnected] = useState(false);
  const [leftSidebar, IsOpen] = useState(false);

  return (
    <Context.Provider
      value={{ walletConnected, IsConnected, leftSidebar, IsOpen }}
    >
      <div className="metaportal_fn_main">
        <WalletSidebar />
        <LeftSidebar />
        <Navbar />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
