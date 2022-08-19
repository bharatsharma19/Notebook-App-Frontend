import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
    </>
  );
}

export default App;
