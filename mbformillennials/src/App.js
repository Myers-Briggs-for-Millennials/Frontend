import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import questionSet from './components/data'


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
  const [allQuestions, setAllQuestions] = useState(questionSet);
  const [currentQuestions, setCurrentQuestions] = useState(questionSet);



  //make copy of array
  //push new questions
  //state for array





  return (
    <div className="App">
      <h1>Myers Briggs For Millenials</h1>
      {currentQuestions.map(quest =>{
        return <Question setSlider={setSlider} slider={slider} question={quest}/>
      })}
      
      <button onClick={e => {
        e.preventDefault();
        indexes.map(index => {
          return questionSet[index];
        })
      }}>Next Page</button>
    </div>
  );
}

export default App;
