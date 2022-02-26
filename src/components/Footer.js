import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='bg-dark text-white fixed-bottom'>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;