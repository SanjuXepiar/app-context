import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Friends } from "./pages/Friends";
import React, { useState, createContext } from "react";
export const AppContext = createContext();
function App() {
  const [userName, setUsername] = useState("Xepiar");
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUsername }}>
        <Router>
          <Link to="/">Home </Link>
          <Link to="/profile">Profile </Link>
          <Link to="/friend">Friends </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friend" element={<Friends />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
