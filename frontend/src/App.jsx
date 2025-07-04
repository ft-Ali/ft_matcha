import React from 'react';
import Discover from './components/discover';
import Home from './components/home';
import SettingsPage from './components/settings';
import MessagesPage from './components/message';
import LikesPage from './components/like';
import ProfilePage from './components/profile';

import DashboardPage from './components/dashboard';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/"   element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    </div>
  );
}

export default App;