import { useState } from 'react';

import './index.scss';
 
import Game from './components/Game';
import Result from './components/Result';
import { questions } from './questions';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const questionCount = questions.length;

  const onClickVariant = (index) => {
    if(index === question.correct){
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  }

  return (
    <>
      <div id="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="App">
        {step !== questionCount ? (
        <Game step={step} question={question} questionCount={questionCount} onClickVariant={onClickVariant}/>
        ) : (
        <Result correct={correct} questionCount={questionCount}/>
        )}
      </div>
    </>
    
  );
}

export default App;