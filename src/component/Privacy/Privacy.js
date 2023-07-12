import React from "react";
import data from "./data";
import PageTitle from "../PageTitle/PageTitle";

const Privacy = () => (
  <div>
    <div className="metaportal_fn_privacy">
      <div className="container small">
        {data.map((element) => (
          <>
            <h3 className="fn__maintitle">{element.question} </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            {element.text}
          </>
        ))}
      </div>
    </div>
  </div>
);

export default Privacy;
