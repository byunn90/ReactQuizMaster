function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to React Quizz</h2>
      <h3>{numQuestions} question to test your React Mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
