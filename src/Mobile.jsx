import React from 'react'

import { box } from './box'

const Mobile = () => {
  return (

  <>
  <div className='over'>
    <div className='title'>
      {/* <h1 className=''>More items to consider</h1> */}
    </div>
    
    <div className='mainbox'>
      {
       box.map((b)=>(
       <div   className="mobileimg">
                <img  className= ""src={b.img} alt=""/>
                <div  className='' >
                  <p className='mobileptag' >{b.name}</p>
                  </div>
                </div>
      ))
    }



    </div>




  </div>

  </>




    
  )
}




export default Mobile