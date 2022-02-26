import { Container, Row, Col, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='bg-dark text-white fixed-bottom'>
      <Container>
        <Row>
          <Col>Github</Col>
          <Col>
            <Navbar variant='dark'><Navbar.Brand href='/'>Blog</Navbar.Brand></Navbar>
          </Col>
          <Col>Signin as admin</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;