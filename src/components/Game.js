function Game() {
    return (
      <>
        <div className="progress">
          <div style={{ width: '50%' }} className="progress__inner"></div>
        </div>
        <h1>When was Harry Potter born?</h1>
        <ul>
          <li>July 31, 1980</li>
          <li>August 31, 1980</li>
          <li>July 30, 1980</li>
        </ul>
      </>
    );
  }
  
  export default Game;