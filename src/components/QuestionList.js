import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onhandleUpdate }) {
  console.log('in QuestionList - questions = ', questions);

  const displayQuestions = questions.map((question) => {
    return <QuestionItem key={question.id} 
              question={question} onDeleteQuestion={onDeleteQuestion} onhandleUpdate={onhandleUpdate} />;
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
