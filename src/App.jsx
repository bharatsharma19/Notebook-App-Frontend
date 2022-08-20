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
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div style={{ marginTop: "60px" }}>
            <Alert message="This" />
          </div>
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/other">
              <Other />
            </Route>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
