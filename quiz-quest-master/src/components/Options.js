function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="option">
      {question.options.map((option, index) => {
        const classNames = `btn btn-option ${
          index === answer ? "answer" : ""
        } ${
          hasAnswered
            ? index === question.correctOption
              ? "correct"
              : "wrong"
            : ""
        }`.trim();

        return (
          <button
            className={classNames}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
export default Options;
