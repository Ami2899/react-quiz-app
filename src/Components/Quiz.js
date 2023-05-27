import React, { useState } from 'react'
import Result from './Result'
import QuizQuestions from './QuizQuestions'
import Timer from './Timer'
import { questions } from './QuizData'

const Quiz = ({startTimer,setStartTimer}) => {

    const [qnumber, setQNumber]=useState(0)
    const [res,setRes]=useState(false)
    const [score,setScore]=useState(0)
    const [seconds, setSeconds] = React.useState(20);

    return (
    <>
        {res?
            <div>
                <Result
                    setQNumber={setQNumber}
                    setRes={setRes}
                    score={score}
                    setScore={setScore}
                    setStartTimer={setStartTimer}
                />
            </div>
        :
            <div>
                <QuizQuestions
                    score={score}
                    qnumber={qnumber}
                    setScore={setScore}
                    setQNumber={setQNumber}
                    setRes={setRes}
                    setSeconds={setSeconds}
                    seconds={seconds}
                    startTimer={startTimer}
                />
                {startTimer && (
                        <Timer
                            setRes={setRes}
                            setQNumber={setQNumber}
                            seconds={seconds}
                            setSeconds={setSeconds}
                            qnumber={qnumber}
                            questions={questions}
                />
              )}
            </div>
        }
    </>
  )
}

export default Quiz
