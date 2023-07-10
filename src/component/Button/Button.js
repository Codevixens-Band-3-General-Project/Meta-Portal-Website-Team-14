import "./Button.css";

export default function Button({ text, handleBtnClick, full }) {
  return (
    <button
      className={`metaportal_fn_button ${full}`}
      onClick={handleBtnClick}
      to="/"
    >
      <span>{text}</span>
    </button>
  );
}
