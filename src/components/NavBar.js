import { Container, Navbar, Nav } from 'react-bootstrap';

import BrandLogo from './BrandLogo';

function NavBar() {
  return (
    <header className='fixed-top'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Navbar.Brand href='/'><BrandLogo />Blog</Navbar.Brand>
          <Nav>
            <Nav.Link href='/'><i className='bi bi-file-earmark-plus'>&#9;Create Article</i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;