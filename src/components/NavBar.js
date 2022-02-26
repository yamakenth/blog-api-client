import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <header className='fixed-top'>
      <Navbar bg='dark' variant='dark' expand='sm'>
        <Container>
          <Navbar.Brand href='/'>Blog</Navbar.Brand>
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