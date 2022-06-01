import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Landingpage from "./Components/createorder/landingpage/Landingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route path="/createorder" element={<Landingpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
