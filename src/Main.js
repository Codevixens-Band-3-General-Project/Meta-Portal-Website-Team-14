/* eslint-disable react/prop-types */

import Contact from "./component/ContactSection/Contact";
import RoadMap from "./component/Roadmap/Roadmap";
import SectionDivider from "./component/SectionDivider/SectionDivider";

const Main = ({ carousel }) => (
  <>
    {carousel}
    <SectionDivider />
    <RoadMap />
    <SectionDivider />
    <Contact />
  </>
);

export default Main;
