import React, { useState } from 'react'
import { fivedata } from './five'
import Fivecard from './Fivecard'

const Fivelist = () => {
    const [index ,setindex]=useState(0)
    const add=()=>{
      if(index< fivedata.length-1)
      setindex(index+1)
    }
    const sub=()=>{
      if(index>0){
      setindex(index-1)
      }
      else{
        setindex(index=0)
      }
    }
  return (
    <div>
      <div className="five_parent">
        <div className="add_but">
          <button onClick={add}>{"<"}</button>
        </div>
        <div className="fiveparent">
            {
                fivedata[index].map((val)=><Fivecard img={val.img}prodecrdeatil={val.prodecrdeatil}off={val.off} limet={val.limet} price={val.price} mrp={val.mrp} offerdate={val.offerdate}add/>)
            }
        </div>
         <div className="but_sub">
                <button onClick={sub}>{">"}</button>
            </div>
        </div>
    </div>
  )
}

export default Fivelist