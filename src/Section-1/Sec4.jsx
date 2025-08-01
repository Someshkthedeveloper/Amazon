import React from 'react'
import {Data4} from './Data4.js'
import Card from './Sec1card.jsx'
const Sec4 = () => {
  return (
        <div className='cardss' >
      <h1>Under ₹499 | Deals on home improvement</h1>
      <div className='sec1cont'>
        {Data4.map((x)=> <Card img={x.img} name={x.name}/>)}
        </div>
    </div>
  )
}

export default Sec4