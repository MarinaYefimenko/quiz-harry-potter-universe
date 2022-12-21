import { useState } from 'react';

import './index.scss';
 
import Game from './components/Game';
import Result from './components/Result';
import { questions } from './questions';

function App() {
  const [step, setStep] = useState(0);
  const question = questions[0];

  return (
    <>
      <div id="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="App">
        <Game question={question}/>
        {/* <Result /> */}
      </div>
    </>
    
  );
}

export default App;