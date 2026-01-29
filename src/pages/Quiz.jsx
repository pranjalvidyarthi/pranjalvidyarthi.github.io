import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import or paste the complete quiz data here
import pythonQuizSets from "../quizData/pythonQuizSets/complete_quiz_data";
const quizData = {
  python: {
    title: "Python Quiz",
    sets: pythonQuizSets,
  },
};

const Quizes = () => {
  const [step, setStep] = useState("category");
  const [selectedSet, setSelectedSet] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [time, setTime] = useState(30);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  /* TIMER */
  useEffect(() => {
    if (step === "quiz" && time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (time === 0) handleSubmit();
  }, [time, step]);

  const startSet = (set) => {
    setSelectedSet(set);
    setCurrentQ(0);
    setUserAnswers({});
    setScore(0);
    setTime(30 * set.length); // 30 seconds per question
    setStep("quiz");
  };

  const selectAnswer = (option) => {
    setUserAnswers({ ...userAnswers, [currentQ]: option });
  };

  const handleSubmit = () => {
    let finalScore = 0;
    selectedSet.forEach((q, i) => {
      if (userAnswers[i] === q.answer) finalScore += 1;
      else if (userAnswers[i]) finalScore -= 1;
    });
    setScore(finalScore);
    setStep("result");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">🧠 Quiz Portal</h2>

      {/* CATEGORY */}
      {step === "category" && (
        <div className="row">
          <div className="col-md-3 mb-3">
            <div
              className="card text-center shadow-sm p-4"
              onClick={() => setStep("set")}
              style={{ cursor: "pointer" }}
            >
              <h3>🐍</h3>
              <h5>Python Quiz</h5>
              <p className="text-muted">100 Questions</p>
            </div>
          </div>
        </div>
      )}

      {/* SET SELECTION */}
      {step === "set" && (
        <div className="text-center">
          <h4>Select Python Quiz Set</h4>
          <p className="text-muted">Each set contains 10 questions</p>
          <div className="row justify-content-center mt-3">
            {Object.entries(quizData.python.sets).map(([key, set], i) => (
              <div key={i} className="col-md-2 col-sm-4 mb-3">
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => startSet(set)}
                >
                  Set {i + 1}
                  <br />
                  <small className="text-muted">Q{i * 10 + 1}-{(i + 1) * 10}</small>
                </button>
              </div>
            ))}
          </div>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setStep("category")}
          >
            ← Back
          </button>
        </div>
      )}

      {/* QUIZ */}
      {step === "quiz" && (
        <div className="card p-4 shadow">
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              Question {currentQ + 1}/{selectedSet.length}
            </h5>
            <span className={`badge ${time < 10 ? 'bg-danger' : 'bg-primary'}`}>
              ⏱ {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
            </span>
          </div>

          <h4 className="mt-3">{selectedSet[currentQ].q}</h4>

          <div className="mt-3">
            {selectedSet[currentQ].options.map((op, i) => (
              <button
                key={i}
                className={`btn w-100 text-start mb-2 ${
                  userAnswers[currentQ] === op
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
                onClick={() => selectAnswer(op)}
              >
                {String.fromCharCode(65 + i)}. {op}
              </button>
            ))}
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-secondary"
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(currentQ - 1)}
            >
              ⬅ Previous
            </button>

            {currentQ === selectedSet.length - 1 ? (
              <button className="btn btn-success" onClick={handleSubmit}>
                ✅ Submit Quiz
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentQ(currentQ + 1)}
              >
                Next ➡
              </button>
            )}
          </div>

          {/* Progress bar */}
          <div className="progress mt-3" style={{ height: "5px" }}>
            <div
              className="progress-bar"
              style={{
                width: `${((currentQ + 1) / selectedSet.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* RESULT */}
      {step === "result" && (
        <div>
          <div className="card text-center p-4 shadow mb-4">
            <h3>🎉 Quiz Finished!</h3>
            <h4 className="mt-2">
              Score: {score} / {selectedSet.length}
            </h4>
            <p className="text-muted">(+1 for correct, -1 for wrong, 0 for unanswered)</p>
            <div className="mt-3">
              <div className="progress" style={{ height: "30px" }}>
                <div
                  className={`progress-bar ${
                    (score / selectedSet.length) * 100 >= 70
                      ? "bg-success"
                      : (score / selectedSet.length) * 100 >= 40
                      ? "bg-warning"
                      : "bg-danger"
                  }`}
                  style={{
                    width: `${Math.max(0, (score / selectedSet.length) * 100)}%`,
                  }}
                >
                  {Math.round((score / selectedSet.length) * 100)}%
                </div>
              </div>
            </div>
          </div>

          {/* Answer Review */}
          {selectedSet.map((q, i) => (
            <div
              key={i}
              className={`card p-3 mb-3 border-start border-5 ${
                userAnswers[i] === q.answer
                  ? "border-success"
                  : userAnswers[i]
                  ? "border-danger"
                  : "border-warning"
              }`}
            >
              <p className="fw-bold mb-2">{q.q}</p>
              
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1">
                    <span className="badge bg-success">Correct Answer:</span>{" "}
                    <strong>{q.answer}</strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <span
                      className={`badge ${
                        userAnswers[i] === q.answer
                          ? "bg-success"
                          : userAnswers[i]
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      Your Answer:
                    </span>{" "}
                    <strong>{userAnswers[i] || "Not Answered"}</strong>
                  </p>
                </div>
              </div>

              {q.explanation && (
                <div className="alert alert-info mt-2 mb-0">
                  <strong>💡 Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-4">
            <button
              className="btn btn-primary me-2"
              onClick={() => setStep("set")}
            >
              Choose Another Set
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setStep("category")}
            >
              Back to Categories
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizes;
