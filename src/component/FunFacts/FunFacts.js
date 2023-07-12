import "./FunFacts.css";

const FunFacts = () => (
  <section id="fun_facts">
    <div className="container">
      <div className="fn_cs_counter_list">
        <ul>
          <li>
            <div className="item">
              <h3 className="fn__gradient_title">
                <span className="prefix" />
                <span
                  className="fn_cs_counter stop"
                  data-from="0"
                  data-to="9999"
                  data-speed="3000"
                  data-decimals="0">
                  9999
                </span>
                <span className="suffix" />
              </h3>
              <p>Total Items</p>
              <div className="divider" />
            </div>
          </li>
          <li>
            <div className="item">
              <h3 className="fn__gradient_title">
                <span className="prefix" />
                <span
                  className="fn_cs_counter stop"
                  data-from="0"
                  data-to="3.9"
                  data-speed="3000"
                  data-decimals="1">
                  3.9
                </span>
                <span className="suffix">k+</span>
              </h3>
              <p>Total Owners</p>
              <div className="divider" />
            </div>
          </li>
          <li>
            <div className="item">
              <h3 className="fn__gradient_title">
                <span className="prefix" />
                <span
                  className="fn_cs_counter stop"
                  data-from="0"
                  data-to="2.4"
                  data-speed="3000"
                  data-decimals="1">
                  2.4
                </span>
                <span className="suffix" />
              </h3>
              <p>Floor Price (ETH)</p>
              <div className="divider" />
            </div>
          </li>
          <li>
            <div className="item">
              <h3 className="fn__gradient_title">
                <span className="prefix" />
                <span
                  className="fn_cs_counter stop"
                  data-from="0"
                  data-to="144"
                  data-speed="3000"
                  data-decimals="0">
                  144
                </span>
                <span className="suffix">k+</span>
              </h3>
              <p>Volume Traded (ETH)</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default FunFacts;
