import React from 'react'
import { best } from './card'
import './new.css'

const Card1 = () => {
  return (
    <>
    <div className='F1'>
        <h1 className='shoptitle'>Shop by category</h1>
        <div className='mt1'>
          {
            best.map((d)=>(
              <div   className="cardimg">
                <img  className= ""src={d.img} alt=""style={{width:"250px",height:"250px"}}/>
                <div className='cardname'>
                  <p >{d.name}</p>
                  </div>
                </div>

            ))
          }

        </div>
      
         </div>
        

</>

  )
}
 
export default Card1