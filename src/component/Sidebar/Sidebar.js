/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ clickHandler, active, _closer, _className, content }) => (
  <>
    <div
      onClick={clickHandler}
      className={_closer + (active ? " active" : "")}
    />
    <div className={_className + (active ? " active" : "")}>
      <Link to="/" className="fn__closer" onClick={clickHandler}>
        <span />
      </Link>
      {content}
    </div>
  </>
);

export default Sidebar;
