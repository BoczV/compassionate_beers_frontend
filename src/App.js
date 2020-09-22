import React from "react";
import Navbar from "./components/Navbar";
import "./style/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RandomBeer from "./components/RandomBeer";
import DetailedBeer from "./components/DetailedBeer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/beer/:beerId" component={DetailedBeer} />
      </Router>
    </div>
  );
}

export default App;
