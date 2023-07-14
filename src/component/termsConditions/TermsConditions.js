import React from "react";
import data from "./data";
import QuestionUnderline from "../QuestionUnderline/QuestionUnderline";

const TermsConditions = () => (
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

export default TermsConditions;
