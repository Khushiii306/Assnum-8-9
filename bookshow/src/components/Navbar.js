import React from "react";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

const array  = ["Gujrat","Bengluru","Hydrabad","Candigadh","Pune","Kolkata","Kochi","Surat"];


function Navb(){
    return(
        <>
    <div className="container-fluid">         
  <div className="col-md-12">
   <Navbar className="color-nav" varient="light" expand="lg">

  
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <img id="logo" src="" width="140px"/>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search For Movie,Event,Sports,Plays And Activity"
          className="ml-auto"
          aria-label="Search"
         
        />
        </Form>
      </Nav>
      
      <Form className="d-flex">
        <select class="form-select city" className = "color-nav" aria-label="Default select example">
{array.map(item =>
    <option key={item.id}>{item}</option>
)}
</select>

        <Button variant="danger">signin</Button> 
      </Form>
    </Navbar.Collapse>

</Navbar>
</div>
</div>
        </>
    )
}

export default Navb;