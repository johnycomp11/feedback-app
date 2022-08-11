import { motion, AnimatePresence } from "framer-motion";
import { PropTypes } from "prop-types";
import FeedbackItem from "./feedbackItem.component";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/*    
  return <div className='feedback-list'>
    {feedback.map((item) =>{
      <FeedbackItem key= {item.id} item = {item}/>
    })}
  </div>
}


FeedbackList.propTypes = {
  feedback: PropTypes.arrayof(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
*/

export default FeedbackList;
