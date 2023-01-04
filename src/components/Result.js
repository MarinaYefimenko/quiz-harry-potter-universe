function Result({ correct, questionCount }) {
    return (
      <div className="result">
        <img src="./emblem.png" alt="Hogwarts emblem"/>
        <h2>You have {correct} right answers out of {questionCount}</h2>
        <a href="https://marinayefimenko.github.io/quiz-harry-potter-universe/">
          <button>Try again</button>
        </a>
      </div>
    );
  }

  export default Result;  