/* eslint-disable react/prop-types */
import "./countdownCards.css";

const CountdownCards = ({ number, duration }) => (
  <div className="item">
    <div className="count">
      <h3 className="fn__gradient_title">{number}</h3>
    </div>
    <span>{duration}</span>
  </div>
);

export default CountdownCards;
