import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"
import Timer from "./Timer";

export default function Quiz({startTimer,setStartTimer}){

    const [currentQues, setCurrentQues]=React.useState(0)
    const [score,setScore]= React.useState(0)
    const [res,setRes]=React.useState(false)
    const [clickedAnswer, setclickedAnswer] = React.useState(0);
    const [seconds, setSeconds] = React.useState(20);

    const navigate=useNavigate();
    const questions=[
        {
            questiontext: "What is 5*2 ?",
            options:[
                {id:0, optiontext:"20", isCorrect:false},
                {id:1,optiontext:"10", isCorrect:true},
                {id:2,optiontext:"25", isCorrect:false},
                {id:3,optiontext:"0", isCorrect:false},
            ]
        },
        {
            questiontext: "What is 3*6 ?",
            options:[
                {id:0,optiontext:"18", isCorrect:true},
                {id:1,optiontext:"10", isCorrect:false},
                {id:2,optiontext:"19", isCorrect:false},
                {id:3,optiontext:"45", isCorrect:false},
            ]
        },
        {
            questiontext: "What is 0*5 ?",
            options:[
                {id:0,optiontext:"5", isCorrect:false},
                {id:1,optiontext:"10", isCorrect:false},
                {id:2,optiontext:"50", isCorrect:false},
                {id:3,optiontext:"0", isCorrect:true},
            ]
        },
        {
            questiontext: "What is 1*1 ?",
            options:[
                {id:0,optiontext:"1", isCorrect:true},
                {id:1,optiontext:"10", isCorrect:false},
                {id:2,optiontext:"0", isCorrect:false},
                {id:3,optiontext:"100", isCorrect:false},
            ]
        },
        {
            questiontext: "What is 9*7 ?",
            options:[
                {id:0,optiontext:"49", isCorrect:false},
                {id:1,optiontext:"10", isCorrect:false},
                {id:2,optiontext:"63", isCorrect:true},
                {id:3,optiontext:"45", isCorrect:false},
            ]
        },
    ];

    function handleAns(isCorrect){
        setTimeout(()=>{
            setclickedAnswer(0)
            if(currentQues+1 < questions.length){
                setCurrentQues(currentQues+1)
            }
            if(currentQues+1===questions.length){
                setRes(true)
            }
            if(isCorrect){
                setScore((score)=>score+1)
            }
            setSeconds(20)
        },600)
    }

    function restartGame(){
        setScore(0);
        setCurrentQues(0);
        setRes(false);
        setStartTimer(false);
        navigate("/")
    }


    return(
        <> 
            
            {res?
                <div className='final-score'>
                <h2>Your Final Score is</h2>
                <h3>{score} out of {questions.length} correct.</h3>
                <button  className="restart-button" onClick={restartGame}>Start Over</button>
            </div>
                :
                <div className="question-card">
                
                <h2>Score is {score}</h2>
                <div>
                    <h2>Qustion {currentQues+1} out of {questions.length}</h2>
                    {startTimer && (
                        <Timer
                            setRes={setRes}
                            setCurrentQues={setCurrentQues}
                            seconds={seconds}
                            setSeconds={setSeconds}
                            currentQues={currentQues}
                            questions={questions}
                />
              )}
                </div>
                <h2>{questions[currentQues].questiontext}</h2>
                <ul>
                    {questions[currentQues].options.map((option)=>{
                        return(
                            <li onClick={()=>handleAns(option.isCorrect) } key={option.id}>
                                {option.optiontext}
                            </li>
                        )
                    })}
                </ul>
            </div>   
            } 
        </>   
    )
}