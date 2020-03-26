import { hot } from 'react-hot-loader';
import React from 'react';
import { Navbar, input, Button } from 'react-bootstrap';

function Login() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        Belyf Auth Store
      </Navbar.Brand>
    </Navbar>
  );
}

export default hot(module)(Login);
