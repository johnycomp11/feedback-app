import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./feedbackItem.component";
import Spinner from "./share/spinner.component"
import FeedbackContext from "../context/feedbackContext.context";

function FeedbackList() {
  //import useContext hook, take info needed from FeedbackContect to use inside componenet
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
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
