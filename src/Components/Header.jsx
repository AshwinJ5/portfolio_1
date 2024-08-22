import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css'


function Header() {
  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:'#c3073f'}} className=" p-4 ">
      <Container>
        <Navbar.Brand style={{fontFamily: '"Croissant One", serif',color:'white'}} className='me-5 wordsone' href="/"><span style={{fontFamily:' "Tangerine", cursive',fontWeight:"900",fontSize:'30px'}}>A</span>shwin </Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
            <Nav.Link className='  mx-2'> <Link  className='word'  style={{fontSize:'20px',fontWeight:'200',fontFamily:'"Rakkas", serif'}} to={'/'}><i class="fa-solid fa-house-chimney me-2"></i> HOME</Link> </Nav.Link>
            <Nav.Link> <Link className='word mx-3' style={{fontWeight:'200',fontFamily:'"Rakkas", serif'}} to={'/about'}><i class="fa-solid fa-user me-2"></i> ABOUT</Link> </Nav.Link>
            <Nav.Link> <Link className='word mx-3' style={{fontWeight:'200',fontFamily:'"Rakkas", serif'}} to={'/services'}><i class="fa-solid fa-list me-2"></i> SERVICES</Link> </Nav.Link>
            <Nav.Link> <Link className='word mx-3' style={{fontWeight:'200',fontFamily:'"Rakkas", serif'}} to={'/projects'}><i class="fa-solid fa-briefcase me-2"></i> PROJECTS</Link> </Nav.Link>
            <Nav.Link> <Link className='word mx-3' style={{fontWeight:'200',fontFamily:'"Rakkas", serif'}} to={'/contact-me'}><i class="fa-solid fa-comments me-2"></i> CONTACT ME</Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header