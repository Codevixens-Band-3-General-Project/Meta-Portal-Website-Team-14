import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WalletSidebar from "./component/Wallet_sidebar/WalletSidebar";
import Navbar from "./component/navbar/Navbar";
import Context from "./component/context/Context";
import Footer from "./component/Footer/Footer";
import LeftSidebar from "./component/Left_sidebar/LeftSidebar";
import Main from "./Main";
import ComingSoon from "./component/ComingSoon/ComingSoon";
import NotFound from "./component/NotFound/NotFound";
import ProtectedPage from "./component/ProtectedPage/ProtectedPage";
import Page404 from "./component/Page404/Page404";
import PageTitle from "./component/PageTitle/PageTitle";
import SectionDivider from "./component/SectionDivider/SectionDivider";
import Cookies from "./component/Cookies/Cookies";
import Privacy from "./component/Privacy/Privacy";
import TermsConditions from "./component/Terms-Conditions/TermsConditions";
import Carousel3D from "./component/3DCarousel/3DCarousel";
import FunFacts from "./component/FunFacts/FunFacts";
import FullScreenSlider from "./component/FullScreenSlider/FullScreenSlider";
import BendedCarousel from "./component/BendedCarousel/BendedCarousel";
import SimpleCarousel from "./component/SimpleCarousel/SimpleCarousel";

const App = () => {
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
            <Route
              path="/"
              element={
                <Main
                  carousel={
                    <>
                      <Carousel3D /> <FunFacts />
                    </>
                  }
                />
              }
            />
            <Route
              path="/BendedCarousel"
              element={
                <Main
                  carousel={
                    <BendedCarousel
                      background={
                        <div id="space">
                          <div id="stars-group-1" />
                          <div id="stars-group-2" />
                          <div id="stars-group-3" />
                          <div id="stars-group-4" />
                          <div id="stars-group-5" />
                          <div id="stars-group-6" />
                        </div>
                      }
                    />
                  }
                />
              }
            />
            <Route
              path="/vedioBackground"
              element={
                <Main
                  carousel={
                    <BendedCarousel
                      background={
                        <div id="vedio">
                          <div id="stars" />
                          <div id="stars2" />
                          <div id="stars3" />
                        </div>
                      }
                    />
                  }
                />
              }
            />
            <Route
              path="/waterEffect"
              element={<Main carousel={<SimpleCarousel water={true} />} />}
            />
            <Route
              path="/simpleCarousel"
              element={<Main carousel={<SimpleCarousel water={false} />} />}
            />
            <Route
              path="/FullScreenSlider"
              element={<Main carousel={<FullScreenSlider />} />}
            />
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
                  <TermsConditions />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
