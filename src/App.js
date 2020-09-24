import React from "react";
import Navbar from "./components/Navbar";
import "./style/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RandomBeer from "./components/RandomBeer";
import DetailedBeer from "./components/DetailedBeer";
import LoginOrRegister from "./components/LoginOrRegister";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/beer/:beerId" component={DetailedBeer} />
        <Route exact path="/login-register" component={LoginOrRegister} />
      </Router>
    </div>
  );
}

export default App;
