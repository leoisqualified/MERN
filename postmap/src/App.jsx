import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Users from "./Users/pages/Users";
import NewPlaces from "./Places/pages/NewPlaces";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={ < NewPlaces />} />
      </Routes>
    </Router>
  );
}

export default App;
