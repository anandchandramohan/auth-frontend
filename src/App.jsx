import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import Login from './components/login/Login';

const App = () => (
  <div className="App">
    <Login />
    <h1>Test</h1>
  </div>
);

export default hot(module)(App);
