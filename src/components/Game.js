function Game({ question }) {
    return (
      <>
        <div className="progress">
          <div style={{ width: '30%' }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map(variant => <li key={variant}>{variant}</li>)}
        </ul>
      </>
    );
  }
  
  export default Game;