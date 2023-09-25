// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Du from './components/DU';  
import Tdra from './components/TDRA'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/calendar/tdra' element={<Tdra />}></Route>
          <Route exact path='/calendar/du' element={<Du />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
