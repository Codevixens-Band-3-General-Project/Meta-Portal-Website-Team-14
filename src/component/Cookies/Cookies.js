import QuestionUnderline from "../QuestionUnderline/QuestionUnderline";
import data from "./data";

const Cookies = () => {
  const Items = data.map((element) => (
    <QuestionUnderline
      key={element.question}
      Question={element.question}
      p={element.text.map((p) => (
        <p key={p}>{p}</p>
      ))}
    />
  ));

  return (
    <div className="metaportal_fn_privacy">
      <div className="container small">{Items}</div>
    </div>
  );
};
export default Cookies;
