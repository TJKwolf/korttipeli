import React from 'react';
import'./App.css'
import Home from './componets/koti';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardGame from './componets/cardGame';
export default  function App(){

  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cardGame">CardGame</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cardGame" element={<CardGame />} />
      </Routes>

    </Router>
  );
}
 