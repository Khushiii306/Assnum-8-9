import React from "react";
import {Card} from 'react-bootstrap';
import '../index.css';
import Navbar from './Navbar';
import Mininav from "./Mininav";
import Ticketcard from './Ticketcard';

function  Movielist(props){
  console.log("props",props);

  return(
        <>
 <Navbar />
 <Mininav />

 {/* background img */}
<div className="container-fluid">
<div className="row">
<div className="col-md-12" style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url('https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg')", height:"650px"}}>
<Card className="bg-dark text-white">
  
  <div className='movie-bg-img'>
       <Card.ImgOverlay>
      
   <Ticketcard />
  </Card.ImgOverlay>
  </div>
</Card>
</div>
</div>
</div>
        </>
    )
}

export default Movielist;

