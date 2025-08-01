import React from 'react'
import {data} from './Nav.js'
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav' id=''>
        {data.map((x)=><p>{x.name}</p>)}
    </div>
  )
}

export default Nav