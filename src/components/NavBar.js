import { Container, Navbar, Nav } from 'react-bootstrap';

import BrandLogo from './BrandLogo';

function NavBar() {
  return (
    <header className='fixed-top'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Navbar.Brand href='/'><BrandLogo />Blog</Navbar.Brand>
          <Nav>
            <Nav.Link href='/signup'><i className='bi bi-person-plus'>&#9;Signup</i></Nav.Link>
            <Nav.Link href='/login'><i className='bi bi-box-arrow-in-right'>&#9;Login</i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;