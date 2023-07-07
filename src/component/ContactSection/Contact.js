import { Link } from "react-router-dom";
import "./Contact.css";
import Button from "../Button/Button";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>

        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                  Duis suscipit egestas ullamcorper. Cras porta nulla et
                  tristique pellentesque. Praesent finibus mauris eu
                  sollicitudin interdum. Morbi et blandit quam. Donec vitae
                  massa purus. Curabitur nunc mauris, iaculis a nibh at,
                  ultricies sodales dolor.
                </p>
                <p>
                  Curabitur pharetra velit eget dignissim varius. In vulputate
                  elit at tortor pellentesque, non pulvinar neque consequat.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+770221770505">+77 022 177 05 05</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <Link to="mailto:frenifyteam@gmail.com">
                    frenifyteam@gmail.com
                  </Link>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>124 S Main St, Scottville, MI 49454, United States</h3>
              </div>
            </li>
          </ul>
        </div>

        <div className="fn_cs_contact_form">
          <form className="contact_form" id="contact_form" autoComplete="off">
            <div className="input_list">
              <ul>
                <li>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                  />
                </li>
                <li>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Your Email *"
                  />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    name="message"
                  ></textarea>
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        viewBox="0 0 26 26"
                        enable-background="new 0 0 26 26"
                        className="fn__svg replaced-svg"
                      >
                        <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"></path>
                      </svg> */}
                    </span>
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </label>
                  <div className="mw300">
                    {/* <Link
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </Link> */}
                    <Button text="Send Message" full="full" />
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            ></div>
            {/*             <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
}
