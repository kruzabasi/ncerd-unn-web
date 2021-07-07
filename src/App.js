import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/components/Nav";
import Home from "./components/home/components/Home";
import Projects from "./components/projects/components/Projects";
import Contact from "./components/contact/components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
