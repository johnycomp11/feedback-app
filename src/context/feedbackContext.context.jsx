import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "Feedback Item 1", rating: 10 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // take objects already in feedback and new items and putting them into a new array
    setFeedback([newFeedback, ...feedback]);
  };

  // set item to be updated.
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //update feedback item that was edited
  //Check key matches and update review if match
  const updateFeedback = (id, updItem) => {
    setFeedbackEdit(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
