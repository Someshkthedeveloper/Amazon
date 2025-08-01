import React from 'react'
import {Data7} from './Data7.js'
import Card from './Sec1card.jsx'
const Sec7 = () => {
  return (
        <div className='cardss'>
      <h1>Under ₹499 | Deals on home improvement</h1>
      <div className='sec1cont'>
        {Data7.map((x)=> <Card img={x.img} name={x.name}/>)}
        </div>
    </div>
  )
}

export default Sec7