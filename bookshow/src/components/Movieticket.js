import { useContext } from "react";
import {Navbar,Nav,Form,FormControl,Button,Card} from 'react-bootstrap';
import '../index.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
// import{ Firstname } from "./Movielist";
import Context from "./Context";
import Display from "./Display";



const array  = ["Gujrat","Bengluru","Hydrabad","Candigadh","Pune","Kolkata","Kochi","Surat"];




function  Movieticket(){ //our own custom element

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


//   const Movieticket = () =>{
//       const fname = useContext(Firstname);
//       return(
//           <h1>
//               My Name is {fname} 
//           </h1>
//       )
//   };
 

  // We declare a state variable called count, and set it to 0.If we want to update the current count, we can call setCount.

  let navigate = useNavigate();
  function redirect(){
    navigate(`/Movielist`);
  }
 
  return(
    <>




    {/* navbar */}
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

        {/* <Nav.Link className="text" href="#action1"></Nav.Link> */}
        {/* <Nav.Link href="#action2"></Nav.Link> */}
        {/* <NavDropdown title="" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"></NavDropdown.Item>
          <NavDropdown.Item href="#action4"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          </NavDropdown.Item>
        </NavDropdown> */}
        {/* <Nav.Link href="#">
        </Nav.Link> */}
      </Nav>
      
      <Form className="d-flex">
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="ml-auto"
          aria-label="Search"
        /> */}

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


{/* mini navbar */}
<div className="container-fluid">
<div className="row">
<div className="col-md-12" > 
  <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">Events</Nav.Link>
      <Nav.Link href="#pricing">Activity</Nav.Link>
      </Nav>
  </Navbar>
  </div>
</div>
 </div> 


 <Context.Provider value={"spider"}>
  <Display/>
</Context.Provider> 
 </>
    )
}

export default Movieticket;
