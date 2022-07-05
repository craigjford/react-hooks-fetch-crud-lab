import React from "react";

function QuestionItem({ question, onDeleteQuestion, onhandleUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleQuestionDelete = (id) => {

    console.log(`http://localhost:4000/question/${question.id}`);
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    onDeleteQuestion(id);
  }

  const handleQuestionUpdate = (event) => {

    const newCorrectIndex = parseInt(event.target.value)

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: newCorrectIndex,  
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onhandleUpdate(updatedQuestion));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleQuestionUpdate}>{options}</select>
      </label>
      <button onClick={() => handleQuestionDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;