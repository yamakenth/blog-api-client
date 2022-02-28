import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import BrandLogo from './BrandLogo';

function UserAuth() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('username') || '');
  }, []);

  function handleClick() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUsername('');
    window.location.href = '/';
  }
  
  if (username.length > 0) {
    return (
      <Nav>
        <Navbar.Text className='me-3'>
          You're signed in as <span className='nav-username'>{username}</span>
        </Navbar.Text>
        <button className='logout-button' onClick={handleClick}>
          <i className='bi bi-box-arrow-right'>&#9;Logout</i>
        </button>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Nav.Link href='/signup'><i className='bi bi-person-plus'>&#9;Signup</i></Nav.Link>
        <Nav.Link href='/login'><i className='bi bi-box-arrow-in-right'>&#9;Login</i></Nav.Link>
      </Nav>
    );
  }
}

function NavBar() {  
  return (
    <header className='fixed-top'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Navbar.Brand href='/'><BrandLogo />Blog</Navbar.Brand>
          <UserAuth />
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;