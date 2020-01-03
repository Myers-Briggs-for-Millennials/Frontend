import React, {useState, useEffect} from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'

import {questions} from './data/questions'

import { calculateResult } from './utils/calculateResult';

import { Btn } from './components/styled-components';

import Question from './components/Question';
import Result from './components/Result';
import Home from './components/Home';
import Register from './components/Register';
import ThemeToggle from './components/ThemeToggle';

const initialValues = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];

function App() {

  let Btn = styled.button`
    background-color: #6558f5
    border: none;
    padding: 1%;
    border-radius: 5px;
    color: white;
    margin: 1%;
`;
  const history = useHistory();

  const [slider, setSlider] = useState(3);
  const [currentSlider, setCurrentSlider] = useState(3);
  const [indexes, setIndexes] = useState([0,1,2,3]);
  const [currentQuestions, setCurrentQuestions] = useState(indexes.map( index => {
    return questions[index];
  }));

  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState('');


  const handleChange = (id, value) => {
    let newValues = [...values];
    newValues[id] = value;
    setValues(newValues);
  };

  useEffect(()=>{
    setCurrentQuestions(
      indexes.map( index => {
        return questions[index];
      })

    );
  }, [indexes])

  const handleSubmit = () => {
    setResult(calculateResult(values));    
    history.push('/result');
    setIndexes([0,1,2,3]);
    setValues(initialValues);
  };

  return (
    <div className="App">
      <h1>Characteristiq</h1>
      <Route exact path='/' render={() => (
        <Home/>
      )}/>
      
      


      {/* maps through data set to produce 4 questions based on the state of indexes */}
      <Route exact path='/questions' render={() => (
        <>
          <p>Rate yourself from 1-5.</p>
          {currentQuestions.map(quest => (
            <Question
              key={quest.id}
              setSlider={setSlider}
              slider={slider}
              currentSlider={currentSlider}
              setCurrentSlider={setCurrentSlider}
              question={quest}
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleSubmit={handleSubmit}                
            />
          ))}

          <div style={{ marginTop: '50px' }}>
            {/* button sends user to prev page. Only shows up after first page */}
            {indexes[0] > 0 && <Btn onClick={e => {
                e.preventDefault();
                let subArr = indexes.map(index => index-=4);
                setIndexes(subArr);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Previous Page</Btn>} {' '}

            {/* button sends user to next page. Disappears on last page */}
            {indexes[3] < questions.length-1 && <Btn onClick={e => {
                e.preventDefault();
                let addArr = indexes.map(index => index+=4);
                setIndexes(addArr);
                console.log(addArr);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // setCurrentSlider(3);
            }}>Next Page</Btn>}

            {indexes[3] === questions.length-1 && <Btn onClick={e => {
                e.preventDefault();
                handleSubmit(values);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Get Result</Btn>}
          </div>
        </>
      )} />

      <Route path='/result' render={() => <Result result={result} />} />
      <Route path='/register' render={() => <Register result={result} />} />

      <ThemeToggle />
    </div>
  );
}

export default App;



