import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { calculateResult } from './utils/calculateResult';

import Question from './components/Question';
import Result from './components/Result';

const initialValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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

  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState('');
  console.log(values);
  console.log(result);

  const handleChange = (id, value) => {
    let newValues = [...values];
    newValues[id] = value;
    setValues(newValues);
  };

  const handleSubmit = finalValues => {
    setResult(calculateResult(values));
  };

  return (
    <div className="App">
      <h1>Myers Briggs For Millenials</h1>
      
      <Route exact path='/' render={() => (
        <Question
          setSlider={setSlider}
          slider={slider}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )} />
      <Route path='/result' render={() => <Result result={result} />} />
    </div>
  );
}

export default App;
