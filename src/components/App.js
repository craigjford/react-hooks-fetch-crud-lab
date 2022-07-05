import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([])

  useEffect (() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestionList(data))
  }, [])

  const handleSubmit = (newQuestion) => {
    setQuestionList([...questionList, newQuestion])
    setPage("List")
  } 

  const handleDelete = (id) => {
    const newQuestionList = questionList.filter((question) => question.id !== id);
    setQuestionList(newQuestionList);
  }
  
  const handleUpdate = (updatedQuestion) => {

    const newQuestionList = questionList.map((question) => {
      if (updatedQuestion.id === question.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    })

    setQuestionList(newQuestionList)

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleSubmit} /> : 
          <QuestionList questions={questionList} onDeleteQuestion={handleDelete} onhandleUpdate={handleUpdate} />}
    </main>
  );
}

export default App;