import React from 'react'
import { questions } from './QuizData'
import { useNavigate } from 'react-router-dom'
import "../App"

const Result = ({
    score,
    setQNumber,
    setRes,
    setScore,
    setStartTimer
}) => {
    const navigate=useNavigate()
    function restartGame(){
        setQNumber(0)
        setRes(false)
        setScore(0)
        setStartTimer(false)
        navigate("/")
    }
  return (
    <div>
      <div>
                <h3>Your Final Score is:</h3>
                <h2>{score} out of {questions.length} correct</h2>
                <button className="restart-button" onClick={restartGame}>Restart Game</button>
            </div>
    </div>
  )
}

export default Result
