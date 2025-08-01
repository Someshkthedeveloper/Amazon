import React from 'react'
import {  Value } from './value.js'
import Card from './card.jsx'
const Listitem = () => {
  return (
    <>
      <div className='cordparent'>
       {Value.map((x)=><Card heading={x.heading} img={x.imag} condata={x.condata} price={x.price} mrp={x.mrp} downImage={x.img} />)}
      </div>
    </>
  )
}

export default Listitem
