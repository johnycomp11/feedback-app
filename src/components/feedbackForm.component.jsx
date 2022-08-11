import { useState } from "react";
import Card from "./share/card.component";
import RatingSelect from "./ratingSelect.component";
import Button from "./button.component";

function FeedbackForm(handleAdd) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  

  const handleTextChange = (e) => {
    //Check if text == ' ', display message and btn disabled
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if ((text !== "") & (text.trim.length <= 10)) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit =(e) => {
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating
        }

        handleAdd(newFeedback);
        setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={ handleSubmit}>
        <RatingSelect select = {(rating) => setRating(rating)}/>
        <h2>How would you rate your service with us?</h2>
        {/*@todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
          <div>{message && <div className="message">{message}</div>}</div>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;