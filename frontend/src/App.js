import React from 'react';
import Profile from './components/profil';
import Home from './components/home';
import SettingsPage from './components/settings';
import MessagesPage from './components/like';
import LikesPage from './components/message';





function App() {
  return (
    <div className="App">
      <Profile />
      <SettingsPage />
      <MessagesPage />
      <LikesPage />

      {/* <Home /> */}
    </div>
  );
}

export default App;