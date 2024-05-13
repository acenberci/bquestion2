import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Quiz from './Components/quiz';
import Answers from './Components/answers';

function App() {
  const [questions,setQuestions] = useState([])
  const [answers,setAnswers] = useState({})
  const [started,setStarted] = useState(false)
  const [finished,setFinished] = useState(false)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
      let tempQuestions = []
      for(let i = 0 ; i<10 ; i++){
        tempQuestions.push({
          question:response.data[Math.floor(Math.random()*100)].body,
          optionA:response.data[Math.floor(Math.random()*100)].title,
          optionB:response.data[Math.floor(Math.random()*100)].title,
          optionC:response.data[Math.floor(Math.random()*100)].title,
          optionD:response.data[Math.floor(Math.random()*100)].title})
      }
      setQuestions(tempQuestions)
    }).catch((error)=>{})
  },[])
  return (
    <>
      <div className='main'>
        {finished ?<Answers answers={answers}></Answers> :started ?<Quiz questions={questions} setAnswers={setAnswers} answers={answers} setFinished={setFinished}></Quiz>:<button onClick={()=>{setStarted(true)}} className=' border-2 border-slate-700 text-white bg-slate-800 shadow-lg shadow-slate-500 py-5 px-10 text-4xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl hover:bg-slate-900 hover:shadow-slate-700'>Start</button>}
      </div>
    </>
  );
}

export default App;
