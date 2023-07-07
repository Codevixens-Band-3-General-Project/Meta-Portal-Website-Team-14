import "./CircleButton.css";

export default function CircleBtn({ clickHandler, active }) {
  return (
    <div
      className={`trigger` + (active ? " active" : "")}
      onClick={clickHandler}
    >
      <span></span>
    </div>
  );
}
