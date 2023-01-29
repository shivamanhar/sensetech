import React, { useEffect , useState} from 'react'
import { Button, Container, Navbar,Nav,NavDropdown,Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import logo from './image/logo.png'


function Header() {

  const [scrollTop, setScrollTop] = useState(0);
 
  const scrol_eff =   {
    backgroundColor: "#fff",
    padding:"0px",
    boxShadow: "rgb(4 54 143 / 72%) 0px 2px 20px"
  }


  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);     
    };

      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className= 'header  fixed-top ' style={scrollTop > 30 ? scrol_eff:{}}  >
            <Container>
           
            <Navbar bg="wight" expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand  ><img src={logo} style={ {   width: '9.5em'}}></img></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
            <Nav.Link >About Us</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Container>
        </header>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Header