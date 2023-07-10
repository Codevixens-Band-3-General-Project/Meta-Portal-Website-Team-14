import "./SearchBox.css";

export default function SearchBox({ type, content }) {
  return (
    <div className="container-custom">
      <form>
        <input name="s" type={type} placeholder="Search here..." />
        {content}
      </form>
    </div>
  );
}
