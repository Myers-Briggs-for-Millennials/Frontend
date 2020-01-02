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

      {/* maps through data set to produce 4 questions based on the state of indexes */}
      {currentQuestions.map(quest =>{
        return <Question setSlider={setSlider} slider={slider} question={quest}/>
      })}
      
      {/* button sends user to prev page. Only shows up after first page */}
      {   indexes[0] > 0 &&   <button onClick={e => {
         e.preventDefault();
          let subArr = indexes.map(index => index-=4);
          setIndexes(subArr);
      }}>Previous Page</button>}


      {/* button sends user to next page. Disappears on last page */}
      { indexes[3] < questions.length-1 && <button onClick={e => {
          e.preventDefault();
          let addArr = indexes.map(index => index+=4);
          setIndexes(addArr);
          console.log(addArr);
      }}>Next Page</button>}




    </div>
  );
}

export default App;
