import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./feedbackItem.component";
import FeedbackContext from "../context/feedbackContext.context";

function FeedbackList() {

  //import useContext hook, take info needed from FeedbackContect to use inside componenet
  const {feedback} = useContext(FeedbackContext)

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
*/





export default FeedbackList;
