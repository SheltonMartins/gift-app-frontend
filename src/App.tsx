import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import FriendProfile from './pages/FriendProfile';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Footer from './components/Footer';
import FriendsListPage from './pages/FriendsListPage';
import FriendsOfFriendPage from './pages/FriendsOfFriendPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/friend/:id" element={<FriendProfile />} />
          <Route path="/friends/:id" element={<FriendsListPage />} />
          <Route path="/friends/:id" element={<FriendsOfFriendPage />} />
          <Route path="/friends-of/:id" element={<FriendsOfFriendPage />} />
        </Routes>
        <Footer/>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
