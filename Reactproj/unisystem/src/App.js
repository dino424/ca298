import './App.css';
//import ShowAllDegrees from './components/ShowAllDegrees';
// import ShowSingleDegree from './components/ShowSingleDegree';
// import ShowAllCohorts from './components/ShowAllCohorts';
// import ShowSingleCohort from './components/ShowSingleCohort';
// import ShowAllModules from './components/ShowAllModules';
// import Layout from "./pages/Layout";
import Alldegrees from "./pages/Alldegrees";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


function App() {
  return (
    <Router>
		<header className="App-header">
            <nav>
            <ul>
              <li><Link to="/Alldegrees">Alldegrees</Link></li>
            </ul>
          </nav>
		</header>
		<Routes>
			<Route path="/Alldegrees"  element={<Alldegrees />} />
		</Routes>
		</Router>
  );
}

export default App;
