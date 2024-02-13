import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function PageNavbar() {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/'>
              Waiter App
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
