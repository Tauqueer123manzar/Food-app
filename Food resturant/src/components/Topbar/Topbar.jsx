import './Topbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo (3).png'
import {Button} from 'react-bootstrap';

const Topbar = () => {
  return (
    <div>
     <Navbar expand="lg" className='bg-transparent shadow-sm'>
      <Container>
        <Navbar.Brand href="#Home">
            <img src={logo} alt="logo" style={{width:"100%",height:"100%",objectFit:"cover"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto text-center d-flex justify-content-center align-items-center'>
            <Nav.Link href='#Home' className='text-secondary fw-bold'>Home</Nav.Link>
            <Nav.Link href='#About' className='text-secondary fw-bold'>About us</Nav.Link>
            <Nav.Link href='#Contact' className='text-secondary fw-bold'>Contact</Nav.Link>
            <Nav.Link href='#Testimonials' className='text-secondary fw-bold'>Testimonials</Nav.Link>
            <Nav.Link href='#Button' className='text-secondary fw-bold text-decoration-none border-0'>
              <Button size='sm' className='bg_login fw-bold text-decoration-none border-0'>login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    </div>
  )
}

export default Topbar

