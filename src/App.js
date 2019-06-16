import React from 'react';
import './App.css';
import Product from './routes/Product.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">            
        <Route exact path="/" component={Product} />
        <Route path="/product" component={Product} />
      </div>
    </Router>
  );
}

export default App;
