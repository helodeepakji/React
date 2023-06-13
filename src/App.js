import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Registation from "./Registation";


const About = () => {
  return (
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> About Page</h1>
      </section>
  );
};

const Service = () => {
  return (
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Service Page</h1>
      </section>
  );
};


const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route exact path="/regisiter">
        <Registation />
      </Route>

    </Switch>
  );
};

export default App;