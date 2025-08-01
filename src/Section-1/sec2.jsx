import React from 'react'
import {Data2} from './Data2.js'
import Card from './Sec1card.jsx'
const Sec2 = () => {
  return (
        <div className='cardss'>
      <h1>Appliance for Home Upto 50%</h1>
      <div className='sec1cont'>
        {Data2.map((x)=> <Card img={x.img} name={x.name}/>)}
        </div>
    </div>
  )
}

export default Sec2