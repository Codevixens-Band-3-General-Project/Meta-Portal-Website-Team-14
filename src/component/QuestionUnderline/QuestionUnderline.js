import "./QuestionUnderline.css";

export default function QuestionUnderline({ Question, p }) {
  return (
    <>
      <h3 className="fn__maintitle">{Question} </h3>
      <div className="fn_cs_divider">
        <div className="divider">
          <span></span>
          <span></span>
        </div>
      </div>
      {p}
    </>
  );
}
