/* eslint-disable react/prop-types */
import SearchBox from "../SearchBox/SearchBox";

const Pages = ({ icon, title, text, inputType, btnText }) => (
  <div className="message_holder">
    <span className="icon">{icon}</span>
    <h4 className="fn__maintitle">{title}</h4>
    <p>{text} </p>
    <SearchBox type={inputType} content={btnText} />
  </div>
);
export default Pages;
