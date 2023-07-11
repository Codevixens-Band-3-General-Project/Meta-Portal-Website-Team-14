/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./ComingSoon.css";
import CountdownCards from "../CountdownCards/CountdownCards";

const ComingSoon = ({ date }) => {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  const calculateCountdown = (endDate) => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  let interval;

  const stop = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    interval = setInterval(() => {
      const calculatedCountDown = calculateCountdown(date);
      if (calculatedCountDown) {
        setCountDown(calculatedCountDown);
      } else {
        setCountDown({ finished: true });
        stop();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const addLeadingZeros = (value) => {
    let newValue = String(value);
    while (newValue.length < 2) {
      newValue = `0${newValue}`;
    }
    return newValue;
  };

  return (
    <div className="metaportal_fn_coming_soon">
      <div className="container">
        <div className="soon_countdown">
          <div className="metaportal_fn_boxed_countdown">
            <ul>
              <li className="days">
                <CountdownCards
                  number={addLeadingZeros(countDown.days)}
                  duration={countDown.days === 1 ? "Day" : "Days"}
                />
              </li>
              <li className="hours">
                <CountdownCards
                  number={addLeadingZeros(countDown.hours)}
                  duration="Hours"
                />
              </li>
              <li className="minutes">
                <CountdownCards
                  number={addLeadingZeros(countDown.min)}
                  duration="Minutes"
                />
              </li>
              <li className="seconds">
                <CountdownCards
                  number={addLeadingZeros(countDown.sec)}
                  duration="Seconds"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="soon_title">
          <h3 className="fn__maintitle">Public Minting is Coming Soon</h3>
          <p>
            Our website is coming soon. We are currently working on our website.
            Please check again within a couple of days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
