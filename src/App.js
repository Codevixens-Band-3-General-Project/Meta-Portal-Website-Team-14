import "./App.css";
import WalletSidebar from "./component/Wallet_sidebar/wallet_sidebar";
import Navbar from "./component/navbar/Navbar";
import Context from "./component/context/Context";
import { useState } from "react";
import Footer from "./component/Footer/Footer";
import LeftSidebar from "./component/Left_sidebar/LeftSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import ComingSoon from "./component/ComingSoon/ComingSoon";
import NotFound from "./component/NotFound/NotFound.js";
import ProtectedPage from "./component/ProtectedPage/ProtectedPage";

function App() {
  const [walletConnected, IsConnected] = useState(false);
  const [leftSidebar, IsOpen] = useState(false);
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ walletConnected, IsConnected, leftSidebar, IsOpen }}
      >
        <div className="metaportal_fn_main">
          <WalletSidebar />
          <LeftSidebar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/comingSoon"
              element={<ComingSoon date={`${year}-08-21T12:00:00`} />}
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="/protected" element={<ProtectedPage />} />
          </Routes>
          <Footer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
