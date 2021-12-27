import React from "react";
import {Navbar,Nav} from 'react-bootstrap';

function  Mininav(props){ //our own custom element
    console.log("props",props);
    const { name } = props; 
    return(
      <>
    {/* mini navbar */}
<div className="container-fluid">
<div className="row">
<div className="col-md-12" > 
  <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
      {name && <Nav.Link href="#home">{}</Nav.Link>}
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Events</Nav.Link>
      <Nav.Link href="#pricing">Activity</Nav.Link>
      </Nav>
  </Navbar>
  </div>
</div>
 </div>
      
    </>
    ) 
  }
  
  export default Mininav;