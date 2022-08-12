import Card from "../components/share/card.component";
import { Link } from "react-router-dom";

function AboutPages() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPages;
