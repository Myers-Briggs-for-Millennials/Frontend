import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import {questions} from './data/questions'

import { calculateResult } from './utils/calculateResult';

import Question from './components/Question';
import Result from './components/Result';

const initialValues = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

function App() {
  const [slider, setSlider] = useState(3);
  // const [introversion, setIntroversion] = useState(0);
  // const [extroversion, setExtroversion] = useState(0);
  // const [sensing, setSensing] = useState(0);
  // const [intuition, setIntuition] = useState(0);
  // const [feeling, setFeeling] = useState(0);
  // const [thinking, setThinking] = useState(0);
  // const [judging, setJudging] = useState(0);
  // const [perceiving, setPerceiving] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(3);
  const [indexes, setIndexes] = useState([0,1,2,3]);
  const [currentQuestions, setCurrentQuestions] = useState(indexes.map( index => {
    return questions[index];
  }));
  console.log(currentQuestions);

  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState('');
  console.log(values);
  console.log(result);


  // const handleChange = (id, value) => {
  //   let newValues = [...values];
  //   newValues[id] = value;
  //   setValues(newValues);
  // };

  useEffect(()=>{
    setCurrentQuestions(
      indexes.map( index => {
        return questions[index];
      })

    );
  }, [indexes])

  const handleSubmit = finalValues => {
    setResult(calculateResult(values));
  };

  return (
    <div className="App">
      <h1>Myers Briggs For Millenials</h1>

      {/* maps through data set to produce 4 questions based on the state of indexes */}
      <Route exact path='/' render={() => currentQuestions.map(quest => (
        <>
            <Question
              setSlider={setSlider}
              slider={slider}
              question={quest}
              values={values}
              // handleChange={handleChange}
              handleSubmit={handleSubmit}
              setValues={setValues}
              currentSlider={currentSlider}
              setCurrentSlider={setCurrentSlider}

            />

            {/* button sends user to prev page. Only shows up after first page */}
            {indexes[0] > 0 &&   <button onClick={e => {
              e.preventDefault();
                let subArr = indexes.map(index => index-=4);
                setIndexes(subArr);
            }}>Previous Page</button>}


            {/* button sends user to next page. Disappears on last page */}
            {indexes[3] < questions.length-1 && <button onClick={e => {
                e.preventDefault();
                let addArr = indexes.map(index => index+=4);
                setIndexes(addArr);
                console.log(addArr);
                // setCurrentSlider(3);
            }}>Next Page</button>}
          </>
        )
      )} />

      <Route path='/result' render={() => <Result result={result} />} />
    </div>
  );
}

export default App;
