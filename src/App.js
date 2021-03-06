import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/components/Nav";
import Home from "./components/home/components/Home";
import Projects from "./components/projects/components/Projects";
import Contact from "./components/contact/components/Contact";
import About from "./components/about/components/About";
import Events from "./components/newsevents/components/Events";
import Footer from "./components/footer/components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={Events} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
