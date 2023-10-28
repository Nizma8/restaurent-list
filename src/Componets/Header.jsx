import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar style={{backgroundColor:'#DA5B00'}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontFamily:'Kay Pho Du ,serif'}} className='fs-3'>
            <img
              alt=""
              src="/img/logo.svg"
             
            />{' '}
            <i  className="fa-solid fa-utensils fa-bounce  
             d-inline-block align-top me-3"></i>
            RESTAURANT
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header