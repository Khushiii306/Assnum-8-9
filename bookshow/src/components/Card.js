import React from "react";
import {Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Moviedata from "../components/Moviedata";


function Box(props){



    let navigate = useNavigate();
  function redirect(data){
    console.log("data",data);
    navigate(`/Movielist`);
  }
return(
    <>
    
<div className="container-fluid">
<div className="row">
{Moviedata.map(item =>(
<div className="col-sm-3" >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imgscr} onClick={()=>redirect(item)} />
  <Card.Body>
    <Card.Title>{item.text}</Card.Title>
    <Card.Text>
      {item.heading}
    </Card.Text>

  </Card.Body>
</Card>
</div>
))}
</div>
</div>  
    </>
)
}

export default Box;