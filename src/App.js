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
import Page404 from "./component/Page404/Page404";
import PageTitle from "./component/PageTitle/PageTitle";
import SectionDivider from "./component/SectionDivider/SectionDivider";
import Cookies from "./component/Cookies/Cookies";
import Privacy from "./component/Privacy/Privacy";
import Terms_Conditions from "./component/Terms-Conditions/Terms-Conditions";
import Home from "./component/HomeSection/Home";

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
          <Home />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/comingSoon"
              element={<ComingSoon date={`${year}-08-21T12:00:00`} />}
            />
            <Route path="/NothingFound" element={<NotFound />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/404" element={<Page404 />} />
            <Route
              path="/cookies"
              element={
                <>
                  <PageTitle title="Cookies" />
                  <SectionDivider />
                  <Cookies />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <PageTitle title="PRIVACY POLICY" />
                  <SectionDivider />
                  <Privacy />
                </>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <>
                  <PageTitle title="TERMS & CONDITIONS" />
                  <SectionDivider />
                  <Terms_Conditions />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
