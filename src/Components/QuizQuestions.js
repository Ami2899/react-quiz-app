import React from 'react'
import { questions } from './QuizData'
import "../App.css"

const QuizQuestions = ({
  score,
  qnumber,
  setScore,
  setQNumber,
  setRes,
  setSeconds,
}
) => {

 function handleAnswer(isCorrect){
  setTimeout(()=>{
      if(qnumber+1 < questions.length){
          setQNumber(qnumber+1)
      }
      if(qnumber+1===questions.length){
          setRes(true)
      }
      if(isCorrect){
          setScore((score)=>score+1)
      }
      setSeconds(20)
  },600)
}
  return (
    <div className='question-card'>
      <h3>Score is {score}</h3> 
      <h2>Question {qnumber+1} of {questions.length}</h2>
      <h2>{questions[qnumber].questiontext}</h2>
      <ul>
        {questions[qnumber].options.map((options)=>{
            return(
                <li onClick={()=>handleAnswer(options.isCorrect)}>
                    {options.optiontext}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default QuizQuestions
