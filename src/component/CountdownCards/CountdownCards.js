import "./CountdownCards.css";

export default function CountdownCards({ number, duration }) {
  return (
    <div className="item">
      <div className="count">
        <h3 className="fn__gradient_title">{number}</h3>
      </div>
      <span>{duration}</span>
    </div>
  );
}
