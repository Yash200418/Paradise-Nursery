import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Discover beautiful indoor, medicinal, and aromatic plants for your
          home and garden.
        </p>

        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
