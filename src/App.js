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
      <iframe
        src='https://koalendar.com/e/meet-with-omaraouf?embed=true'
        width='100%'
        height='800px'
        frameborder='0'
      ></iframe>
    </div>
  );
}

export default App;
