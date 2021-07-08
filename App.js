import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TravelImages from "./components/TravelImages";
import Locations from "./components/locations";

function App() {
  return (
    <Router>
      <>
        <header className="App-header">
          <Link to="/" className="head-logo">
            Dubai Tourism
          </Link>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/locations" className="nav-link">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/travel-images" className="nav-link">
                  Travel Images
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/locations">
            <Locations />
          </Route>

          <Route path="/travel-images">
            <TravelImages />
          </Route>
        </Switch>

        <footer>
          <h1>Tourism site for Dubai</h1>
        </footer>
      </>
    </Router>
  );
}

export default App;
