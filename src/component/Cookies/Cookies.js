import QuestionUnderline from "../questionUnderline/QuestionUnderline";
import data from "./data";
import "./cookies.css";

const Cookies = () => (
  <div className="metaportal_fn_privacy">
    <div className="container small">
      {data.map((element) => (
        <QuestionUnderline
          key={element.question}
          question={element.question}
          text={element.text}
        />
      ))}
    </div>
  </div>
);
export default Cookies;
