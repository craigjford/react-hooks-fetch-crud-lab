import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
 
  useEffect(() => { 
    console.log('using useEffect fetching')
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(data => setQuestions(data))
  },[])

  function handlePageChange(type) {
    console.log("in app new quest type = ", type)
    setPage(type)
  }
  
  function handleQuestDel(id) {
    const newQuestions = questions.filter((question) => question.id !== id);
    setQuestions(newQuestions)
    setPage("List")
  }

  function handleQuestChg(id, newQuestion) {
    const newQuestions = questions.map((question) => {
        if (question.id !== id) {
            return question;
        } else {
            return newQuestion;
        }
    })
    setQuestions(newQuestions)
    setPage("List")
}

  function handleQuestSubmit(newQuestion) {
    const newQuestions = [...questions, newQuestion]
    setQuestions(newQuestions);
    setPage("List")
  }

  return (
    <main>
      <AdminNavBar onChangePage={handlePageChange} />
      {page === "Form" ? <QuestionForm onQuestSubmit={handleQuestSubmit} /> : 
          <QuestionList questions={questions} onQuestChg={handleQuestChg} onQuestDel={handleQuestDel} />}
    </main>
  );
}

export default App;
