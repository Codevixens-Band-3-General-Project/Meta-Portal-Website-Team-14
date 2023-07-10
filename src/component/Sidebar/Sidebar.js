import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({
  clickHandler,
  active,
  _closer,
  _className,
  content,
}) {
  return (
    <>
      <div
        onClick={clickHandler}
        className={_closer + (active ? " active" : "")}
      ></div>
      <div className={_className + (active ? " active" : "")}>
        <Link to="/" className="fn__closer" onClick={clickHandler}>
          <span></span>
        </Link>
        {content}
      </div>
    </>
  );
}
