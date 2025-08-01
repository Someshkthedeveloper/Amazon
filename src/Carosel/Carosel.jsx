import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carosel.css'
import {arr} from './Carosel.js'
const Carosel = () => {
  return (
    <div className="carosel">
        <Carousel data-bs-theme="dark">
{arr.map((x)=>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={x.img}
              alt="First slide"
            />
           
          </Carousel.Item>
)}
        </Carousel>
        </div>
    
  )
}

export default Carosel