import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import {questions} from './data/questions'


function App() {
  const [slider, setSlider] = useState(3);
  const [introversion, setIntroversion] = useState(0);
  const [extroversion, setExtroversion] = useState(0);
  const [sensing, setSensing] = useState(0);
  const [intuition, setIntuition] = useState(0);
  const [feeling, setFeeling] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [judging, setJudging] = useState(0);
  const [perceiving, setPerceiving] = useState(0);
  const [indexes, setIndexes] = useState([0,1,2,3]);
  const [currentQuestions, setCurrentQuestions] = useState(indexes.map( index => {
    return questions[index];
  }));


  useEffect(()=>{
    setCurrentQuestions(
      indexes.map( index => {
        return questions[index];
      })

    );
  }, [indexes])


  return (
    <div className="App">
      <h1>Myers Briggs For Millenials</h1>
      {currentQuestions.map(quest =>{
        return <Question setSlider={setSlider} slider={slider} question={quest}/>
      })}
      
      <button onClick={e => {
        e.preventDefault();
        let newArr = indexes.map(index => index+=4);
        if (newArr[0] < questions.length){
          setIndexes(newArr);
        }
        

      }}>Next Page</button>
    </div>
  );
}

export default App;
