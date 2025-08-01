import React, { useState, } from "react";
import './maincard.css'
// import { img } from "./value";

const card = (props) => {
  const [index, setindex]= useState(0)
  const add=()=>{
    if(index < props.downImage.length-1){
    setindex(index+1)
    }
  }
  const sub=()=>{
    if(index>0){
    setindex(index-1)
    }
  }
  return (
    <div>
      <div className="cord">
        <div className="pad">
        <h3 className="heading_card">{props.heading}</h3>
        <div className="scroll">
        <div className="scrollbu"><button className="add" onClick={add}>{"<"}</button></div>
        <div className="img"><img src={props.downImage[index].img} alt="product" className="cordimg" /></div>
        <div className="scrollbu"><button className="add" onClick={sub}>{">"}</button></div>
        </div>
        <p className="paro_card">{props.condata}</p>
        <div className="price_to">
          <div className="price">
            {" "}
            <p>Price: {props.price}</p>{" "}
          </div>
          <div className="mrp">
            <p>
              MRP: <s>{props.mrp}</s>
            </p>
          </div>
        </div>
        <div className='moreimg'>
         {props.downImage.map((imgs, index) => (
                <img key={index} src={imgs.img} className="downimg" alt="additional product" />
              ))}
              </div>
              </div>
      </div>
    </div>
  );
};

export default card;
