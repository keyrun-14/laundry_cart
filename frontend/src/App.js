import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Createorder from "./Components/CreateOrders/landingpage/Createorder";
import Pastorder from "./Components/PastOrder/Pastorderlist/Pastorder";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route path="/createorder" element={<Createorder />} />
          <Route path="/pastorders" element={<Pastorder />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
