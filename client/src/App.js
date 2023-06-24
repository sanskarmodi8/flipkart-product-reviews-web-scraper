import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/flipkart-product-reviews-web-scraper/' element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
