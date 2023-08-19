import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  },
  {
    id: 5418,
    question: "What does JSX stand for?",
    answer: "JavaScript XML"
  },
  {
    id: 6742,
    question: "What does the React `useEffect` hook do?",
    answer: "It allows you to perform side effects in function components."
  },
  {
    id: 8761,
    question: "What's the purpose of the `key` prop in React lists?",
    answer:
      "It helps React identify which items have changed, been added, or been removed."
  },
  {
    id: 3459,
    question: "What is React Router used for?",
    answer:
      "It provides navigation and routing functionalities for React applications."
  },
  {
    id: 9350,
    question: "How can you create a reusable component in React?",
    answer:
      "By defining a function or class component and then using it wherever needed."
  }
];

export default function App() {
  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
}

function FlashCards({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  function handlePrevious() {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setShowAnswer(false);
  }

  function handleNext() {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
    setShowAnswer(false);
  }

  function handleCardClick() {
    setShowAnswer(!showAnswer);
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flashcards">
      <div
        className={`card ${showAnswer ? "reveal" : ""}`}
        onClick={handleCardClick}
      >
        <p>{showAnswer ? currentQuestion.answer : currentQuestion.question}</p>
      </div>
      <div className="navigation">
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          &lt; Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}
