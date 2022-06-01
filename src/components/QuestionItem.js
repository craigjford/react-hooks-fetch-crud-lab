import React from "react";


function QuestionItem({ question, onQuestChg, onQuestDel }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(event) {

      console.log('in Question Item update')
      console.log('update id = ', id);
      const childId = parseInt(event.target.value)

      fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
           correctIndex: childId,
        }),
      })
        .then((r) => r.json())    
        .then((updatedQuestion) => onQuestChg(id, updatedQuestion));
      
  }
   
  function handleDelete() {
    console.log('in Question Item delete');
    onQuestDel(id);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
