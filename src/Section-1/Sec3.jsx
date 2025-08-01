import React from 'react'
import {Data3} from './Data3.js'
import Card from './Sec1card.jsx'
const Sec3 = () => {
  return (
        <div className='cardss'>
      <h1>PlayStation 5 Slim & Accessories | No Cost</h1>
      <div className='sec1cont'>
        {Data3.map((x)=> <Card img={x.img} name={x.name}/>)}
        </div>
    </div>
  )
}

export default Sec3