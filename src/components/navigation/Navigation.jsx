import { hot } from 'react-hot-loader';
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        Belyf Auth Store
      </Navbar.Brand>
    </Navbar>
  );
}

export default hot(module)(Navigation);
