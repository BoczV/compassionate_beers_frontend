import React from 'react';
import Navbar from "./components/Navbar";
import './style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router>
                <Route exact path="/" component={HomePage}/>
            </Router>
        </div>
    );
}

export default App;
