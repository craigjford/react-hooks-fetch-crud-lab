import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQuestChg, onQuestDel }) {

  const questionsLis = questions.map((question) => {
    return (<QuestionItem key={question.id} question={question} onQuestChg={onQuestChg} onQuestDel={onQuestDel} />)
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
          {questionsLis}
      </ul>
    </section>
  );
}

export default QuestionList;
