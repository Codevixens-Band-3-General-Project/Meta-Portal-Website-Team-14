/* eslint-disable react/prop-types */
import "./QuestionUnderline.css";

const QuestionUnderline = ({ Question, p }) => (
  <>
    <h3 className="fn__maintitle">{Question} </h3>
    <div className="fn_cs_divider">
      <div className="divider">
        <span />
        <span />
      </div>
    </div>
    {p}
  </>
);
export default QuestionUnderline;
