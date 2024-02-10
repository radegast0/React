import { useState } from "react";
import questions from "./data.js";

const FlashCard = () => {
  const [selected, setSelected] = useState(null);

  function handleSelect(id) {
    setSelected(id !== selected ? id : null);
  }

  return (
    <>
      {questions.map((question) => (
        <div
          onClick={() => handleSelect(question.id)}
          key={question.id}
          className={question.id === selected ? "selected" : null}
        >
          <p>
            {question.id === selected ? question.answer : question.question}
          </p>
        </div>
      ))}
    </>
  );
};

export default FlashCard;
