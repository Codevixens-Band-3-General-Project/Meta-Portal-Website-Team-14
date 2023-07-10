import SearchBox from "../SearchBox/SearchBox";

export default function Pages({ icon, title, text, inputType, btnText }) {
  return (
    <div className="message_holder">
      <span className="icon">{icon}</span>
      <h4 className="fn__maintitle">{title}</h4>
      <p>{text} </p>
      <SearchBox type={inputType} content={btnText} />
    </div>
  );
}
