/* eslint-disable react/prop-types */
import "./SearchBox.css";

const SearchBox = ({ type, content }) => (
  <div className="container-custom">
    <form>
      <input name="s" type={type} placeholder="Search here..." />
      {content}
    </form>
  </div>
);

export default SearchBox;
