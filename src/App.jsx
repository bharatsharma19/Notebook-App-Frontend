import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Other from './components/Other';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/other">
            <Other />
          </Route>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
