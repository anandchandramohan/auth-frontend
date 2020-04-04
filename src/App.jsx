import * as React from "react";
import { Wrapper } from './components/Styles';
import Login from './containers/Login';
import AuthContextProvider from "./contexts/AuthContext";

import './App.css'

function App() {
  return (
    <AuthContextProvider>
      <Wrapper>
        <Login />
      </Wrapper>
    </AuthContextProvider>
  );
}

export default App;
