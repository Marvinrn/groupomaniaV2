import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;