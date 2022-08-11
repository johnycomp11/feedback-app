import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header.component";
import FeedbackData from "./data/feedback.data";
import FeedbackForm from "./components/feedbackForm.component";
import FeedbackStats from "./components/feedbackStats.component";
import FeedbackList from "./components/feedbackList.component";
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
    setFeedback([newFeedback,...feedback])
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
