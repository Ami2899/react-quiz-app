import React, { useEffect } from "react";
import "../App.css"

const Timer = ({
    setRes,
    setQNumber,
    seconds,
    setSeconds,
    qnumber,
    questions
}) => {
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }

      if (seconds === 0) {
        if (qnumber < questions.length - 1) {
          setQNumber((qnumber) => qnumber + 1);
          setSeconds(20);
        } else {
          setRes(true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <h3 className="time">
      Time Left - 00 : {seconds < 10 ? `0${seconds}` : seconds}
    </h3>
  );
};

export default Timer;