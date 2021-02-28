import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  return (
    <ChatEngine
      height="100vh"
      projectID="PROJECT-ID here"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a').play()}
    />
  );
};

export default App;
