import React from 'react';
import Profile from './components/profil';
import Home from './components/home';
import SettingsPage from './components/settings';
import MessagesPage from './components/message';
import LikesPage from './components/like';
import DashboardPage from './components/dashboard';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    </div>
  );
}

export default App;