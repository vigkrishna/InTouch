import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './Pages/HomePage';
 import ChatPage from './Pages/ChatPage';
import './App.css';

function App() {
  return (
    <div className='App'>
     <Route path ="/"  component={HomePage}  />
      <Route path ="/chat"  component={ChatPage} /> 
    </div>
  );
}

export default App;
