import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import Card from "../components/share/card.component";
import FeedbackContext from "../context/feedbackContext.context";

function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
