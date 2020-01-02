import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Question from './components/Question';
import Result from './components/Result';


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


  


  return (
    <div className="App">
      <h1>Myers Briggs For Millenials</h1>
      
      <Route exact path='/' render={() => <Question setSlider={setSlider} slider={slider}/>} />
      <Route path='/result' render={() => <Result />} />
    </div>
  );
}

export default App;
