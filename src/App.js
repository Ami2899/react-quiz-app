import Quiz from './Quiz';
import Header from './Header';
import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function  App(){
  const [startTimer,setStartTimer]=useState(false)
  return(
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header setStartTimer={setStartTimer}/>}/>
          <Route path="/quiz" element={<Quiz setStartTimer={setStartTimer}  startTimer={startTimer}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
