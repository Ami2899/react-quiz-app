import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"

const Header = ({setStartTimer}) => {
    const navigate=useNavigate()
    const startQuiz=()=>{
        navigate("/quiz")
        setStartTimer(true)
    }
  return (
    <div>
        <button className="start-button" onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default Header
