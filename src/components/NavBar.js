import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import BrandLogo from './BrandLogo';

function NavBar() {  
  return (
    <header className='fixed-top'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Navbar.Brand href='/'><BrandLogo />Blog</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;