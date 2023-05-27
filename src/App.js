import './App.css';
import Quiz from './Components/Quiz';
import Start from './Components/Start';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react';

function App() {
  const [startTimer,setStartTimer]=useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start setStartTimer={setStartTimer}/>}/>
          <Route path="/quiz" element={<Quiz setStartTimer={setStartTimer}  startTimer={startTimer}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;