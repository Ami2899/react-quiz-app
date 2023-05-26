import React, { useEffect } from "react";

const Timer = ({
    setRes,
    setCurrentQues,
    seconds,
    setSeconds,
    currentQues,
    questions
}) => {
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }

      if (seconds === 0) {
        if (currentQues < questions.length - 1) {
          setCurrentQues((currentQues) => currentQues + 1);
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