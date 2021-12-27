import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import {Button,Card} from 'react-bootstrap';
import '../index.css';

function Ticketcard(props){

    
  let navigate = useNavigate();
  function redirect(){
    navigate(`/Movieticket`);
  }


  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]);

  const dec = () => {
    if(count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }
    return(
        <>

<div className="col">
    <div className="col-md-3" >
    <Card.Img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NzUwayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-cjtuytwcbl-portrait.jpg" alt="Card image" onClick={redirect} />
    <div>
<p style={{backgroundColor: "#DC3545"}}>Book Tickets Here {count} person</p>
<Button onClick={() => setCount(count + 1)} variant="danger">+</Button>{' '}
<Button onClick={() => dec(count - 1)} variant="info">-</Button>{' '}
      </div>
    <Card.Text>Last updated 3 mins ago</Card.Text>
    </div>
    </div>

        </>
    )
}

export default Ticketcard;