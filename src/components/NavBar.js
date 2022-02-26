import { Container, Navbar, Nav } from 'react-bootstrap';

import BrandLogo from './BrandLogo';

function NavBar() {
  return (
    <header className='fixed-top'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Navbar.Brand href='/'><BrandLogo />Blog</Navbar.Brand>
          <Nav>
            <Nav.Link href='/'><i className='bi bi-person-fill'>&#9;Dummy</i></Nav.Link>
            <Nav.Link href='/'><i className='bi bi-box-arrow-in-left'>&#9;Dummy</i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;