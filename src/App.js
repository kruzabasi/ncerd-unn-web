import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/components/Nav";
import Home from "./components/home/components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
