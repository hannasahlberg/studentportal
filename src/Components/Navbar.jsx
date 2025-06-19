import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <> 
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Startsida</Nav.Link>
            <Nav.Link as={Link} to="/courses">Kurser</Nav.Link>
            <Nav.Link as={Link} to="/news">Nyheter</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
