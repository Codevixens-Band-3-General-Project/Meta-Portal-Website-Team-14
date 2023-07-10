import Contact from "./component/ContactSection/Contact";
import SectionDivider from "./component/SectionDivider/SectionDivider";

export default function Main({ carousel }) {
  return (
    <>
      {carousel}
      <SectionDivider />
      <Contact />
    </>
  );
}
