import Sidebar from "../Sidebar/Sidebar";
import Context from "../context/Context";
import { useContext } from "react";
import "./LeftSidebar.css";

export default function LeftSidebar() {
  const { leftSidebar, IsOpen } = useContext(Context);

  const handleClick = (event) => {
    IsOpen(false);
  };

  return (
    <Sidebar
      clickHandler={handleClick}
      active={leftSidebar}
      _closer="metaportal_fn_leftnav_closer"
      _className="metaportal_fn_leftnav"
      content={<h1>Hello</h1>}
    />
  );
}
