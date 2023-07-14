/* eslint-disable react/prop-types */
import "./questionUnderline.css";

const QuestionUnderline = ({ question, text }) => (
  <>
    <h3 className="fn__maintitle">{question} </h3>
    <div className="fn_cs_divider">
      <div className="divider">
        <span />
        <span />
      </div>
    </div>
    {text}
  </>
);
export default QuestionUnderline;
