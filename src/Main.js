/* eslint-disable react/prop-types */

import Contact from "./component/ContactSection/Contact";
import SectionDivider from "./component/SectionDivider/SectionDivider";

const Main = ({ carousel }) => (
  <>
    {carousel}
    <SectionDivider />
    <Contact />
  </>
);

export default Main;
