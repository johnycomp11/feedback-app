import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.component";
import FeedbackForm from "./components/feedbackForm.component";
import FeedbackStats from "./components/feedbackStats.component";
import FeedbackList from "./components/feedbackList.component";
import AboutPages from "./pages/aboutPages";
import { FeedbackProvider } from "./context/feedbackContext.context";
import AboutIconLink from "./components/aboutIconLink.component";
import "./App.css";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPages />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
