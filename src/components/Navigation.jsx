import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bsPrefix='customNav'>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
    </Navbar>
  )
}

export default Navigation