import React from 'react'
import {Data1} from './Data1.js'
import Card from './Sec1card.jsx'
import './style1.css'
const Sec1 = () => {
  return (
    <div className='cardss'>
      <h1>Revamp your home in style</h1>
      <div className='sec1cont'>
        {Data1.map((x)=> <Card img={x.img} name={x.name}/>)}
        </div>
    </div>
  )
}

export default Sec1