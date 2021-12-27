import React from "react";
import { useState } from 'react';
import {Carousel} from 'react-bootstrap';

function Car(props){
    console.log("props",props);


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return(
        <>
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
<Carousel activeIndex={index} onSelect={handleSelect} className="carsol">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://in.bmscdn.com/promotions/cms/creatives/1640256405251_riders.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
</div>
</div>
</div>

        </>
    )
}

export default Car;