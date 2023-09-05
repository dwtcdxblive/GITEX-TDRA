// App.js
import React from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Import Routes
import AdminPage from './components/AdminPage';
import PublicPage from './components/PublicPage';
import TestimonialSubmission from './components/TestimonialSubmission';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {' '}
          {/* Use Routes */}
          <Route expact path='/admin' element={<AdminPage />} />{' '}
          {/* Use element prop */}
          <Route expact path='/public' element={<PublicPage />} />
          <Route expact path='/submit' element={<TestimonialSubmission />} />
          <Route expact path='/' element={<PublicPage />} />{' '}
          {/* Default route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
