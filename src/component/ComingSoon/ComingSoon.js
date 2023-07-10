import "./ComingSoon.css";
import React, { Component } from "react";
import CountdownCards from "../CountdownCards/CountdownCards";

class ComingSoon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      if (date) {
        this.setState(date);
      } else {
        this.setState({ finished: true });
        this.stop();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="metaportal_fn_coming_soon">
        <div className="container">
          <div className="soon_countdown">
            <div className="metaportal_fn_boxed_countdown">
              <ul>
                <li className="days">
                  <CountdownCards
                    number={this.addLeadingZeros(countDown.days)}
                    duration={countDown.days === 1 ? "Day" : "Days"}
                  />
                </li>
                <li className="hours">
                  <CountdownCards
                    number={this.addLeadingZeros(countDown.hours)}
                    duration={"Hours"}
                  />
                </li>
                <li className="minutes">
                  <CountdownCards
                    number={this.addLeadingZeros(countDown.min)}
                    duration={"Minutes"}
                  />
                </li>
                <li className="seconds">
                  <CountdownCards
                    number={this.addLeadingZeros(countDown.sec)}
                    duration={"Seconds"}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="soon_title">
            <h3 className="fn__maintitle">Public Minting is Coming Soon</h3>
            <p>
              Our website is coming soon. We are currently working on our
              website. Please check again within couple days.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
