import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { FaUserCog } from "react-icons/fa";


function Header() {
  return (
    <header>
        
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <FaUserCog/> &nbsp; React Bootstrap
           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header