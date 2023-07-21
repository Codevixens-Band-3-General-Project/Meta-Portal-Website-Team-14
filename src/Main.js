/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import WalletSidebar from "./component/walletSidebar/WalletSidebar";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import LeftSidebar from "./component/leftSidebar/LeftSidebar";
import ComingSoon from "./component/comingSoon/ComingSoon";
import NotFound from "./component/notFound/NotFound";
import ProtectedPage from "./component/protectedPage/ProtectedPage";
import Page404 from "./component/page404/Page404";
import PageTitle from "./component/pageTitle/PageTitle";
import SectionDivider from "./component/sectionDivider/SectionDivider";
import Cookies from "./component/cookies/Cookies";
import TermsConditions from "./component/termsConditions/TermsConditions";
import LandingPage from "./pages/LandingPage";
import Carousel3D from "./component/3DCarousel/3DCarousel";
import FunFacts from "./component/funFacts/FunFacts";
import FullScreenSlider from "./component/fullScreenSlider/FullScreenSlider";
import BendedCarousel from "./component/bendedCarousel/BendedCarousel";
import SimpleCarousel from "./component/simpleCarousel/SimpleCarousel";
import Privacy from "./component/privacy/Privacy";
import About from "./component/About";
import Contact from "./component/contactSection/Contact";
import Blog from "./component/Blog";
import RoadMap from "./component/roadMap/Roadmap";
import MintPage from "./component/mint/MintPage";
import CollectionSection from "./component/collection/CollectionSection";

const Main = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const roadmapRef = useRef(null);
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
      case "roadmap":
        return roadmapRef;
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
    <div className="metaportal_fn_main">
      <WalletSidebar />
      <LeftSidebar />
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              carousel={
                <div ref={homeRef}>
                  <Carousel3D /> <FunFacts />
                </div>
              }
              aboutSection={
                <div ref={aboutRef}>
                  <About />
                </div>
              }
              roadmapSection={
                <div ref={roadmapRef}>
                  <RoadMap />
                </div>
              }
              collectionSection={
                <div ref={collectionRef}>
                  <CollectionSection />
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
          path="/BendedCarousel"
          element={
            <LandingPage
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
            <LandingPage
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
          element={<LandingPage carousel={<SimpleCarousel water />} />}
        />
        <Route
          path="/simpleCarousel"
          element={<LandingPage carousel={<SimpleCarousel water={false} />} />}
        />
        <Route
          path="/fullScreenSlider"
          element={<LandingPage carousel={<FullScreenSlider />} />}
        />
        <Route
          path="/comingSoon"
          element={<ComingSoon date={`${year}-08-21T12:00:00`} />}
        />
        <Route path="notFound" element={<NotFound />} />
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
              <SectionDivider />
              <Privacy />
            </>
          }
        />
        <Route
          path="/mintPage"
          element={<MintPage date={`${year}-08-21T12:00:00`} />}
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
  );
};

export default Main;
