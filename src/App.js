import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import WalletSidebar from "./component/Wallet_sidebar/WalletSidebar";
import Navbar from "./component/navbar/Navbar";
import Context from "./component/context/Context";
import Footer from "./component/Footer/Footer";
import LeftSidebar from "./component/Left_sidebar/LeftSidebar";
import ComingSoon from "./component/ComingSoon/ComingSoon";
import NotFound from "./component/NotFound/NotFound";
import ProtectedPage from "./component/ProtectedPage/ProtectedPage";
import Page404 from "./component/Page404/Page404";
import PageTitle from "./component/PageTitle/PageTitle";
import SectionDivider from "./component/SectionDivider/SectionDivider";
import Cookies from "./component/Cookies/Cookies";
import TermsConditions from "./component/Terms-Conditions/TermsConditions";
import LandingPage from "./pages/LandingPage";
import Privacy from "./component/privacy/Privacy";
import Divider from "./component/SectionDivider/Divider";
import About from "./component/About";
import Contact from "./component/ContactSection/Contact";
import Blog from "./component/Blog";

const App = () => {
  const [walletConnected, IsConnected] = useState(false);
  const [leftSidebar, IsOpen] = useState(false);
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  // Wrap the object in useMemo to memoize its value
  const contextValue = useMemo(
    () => ({ walletConnected, IsConnected, leftSidebar, IsOpen }),
    [walletConnected, IsConnected, leftSidebar, IsOpen],
  );

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const collectionRef = useRef(null);

  const getRefFromSectionId = (sectionId) => {
    switch (sectionId) {
      case "home":
        return homeRef;
      case "about":
        return aboutRef;
      case "collection":
        return collectionRef;
      case "blog":
        return blogRef;
      case "contact":
        return contactRef;
      default:
        return null;
    }
  };
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (sectionId) {
      const ref = getRefFromSectionId(sectionId);
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      scrollToSection("home");
    }
  }, [location]);

  return (
    <Context.Provider value={contextValue}>
      <div className="metaportal_fn_main">
        <WalletSidebar />
        <LeftSidebar />
        <Navbar scrollToSection={scrollToSection} homeRef={homeRef} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                aboutSection={
                  <div ref={aboutRef}>
                    <About />
                  </div>
                }
                contactSection={
                  <div ref={contactRef}>
                    <Contact />
                  </div>
                }
                blogSection={
                  <div ref={blogRef}>
                    <Blog />
                  </div>
                }
              />
            }
          />
          <Route
            path="/comingSoon"
            element={<ComingSoon date={`${year}-08-21T12:00:00`} />}
          />
          <Route path="/NothingFound" element={<NotFound />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="*" element={<Page404 />} />
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
                <Divider />
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
  );
};

export default App;
