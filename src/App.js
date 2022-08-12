import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header.component";
import FeedbackData from "./data/feedback.data";
import FeedbackForm from "./components/feedbackForm.component";
import FeedbackStats from "./components/feedbackStats.component";
import FeedbackList from "./components/feedbackList.component";
import AboutPages from "./pages/aboutPages";
import AboutIconLink from "./components/aboutIconLink.component";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // take objects already in feedback and new items and putting them into a new array
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd = {addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPages />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
