import { Container, Navbar, Nav } from 'react-bootstrap';

import BrandLogo from './BrandLogo';

function Footer() {
  return (
    <footer className='fixed-bottom'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Nav>
            <Nav.Link href='https://www.github.com/yamakenth' target='_blank'>
              <i className='bi bi-github'>&#9;GitHub</i>
            </Nav.Link>
          </Nav>
          <Navbar.Brand href='/' className='mx-0'><BrandLogo />Blog</Navbar.Brand>
          <Nav>
            <Nav.Link href='/login'><i className='bi bi-gear-wide-connected'>&#9;Login as Admin</i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;