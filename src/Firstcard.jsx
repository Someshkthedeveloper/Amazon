import React from 'react'
import img1 from './assets/slider_ (1).gif'
import img2 from './assets/slider_2.gif'
import img3 from './assets/slider_3.gif'
import img4 from './assets/slider_4.gif'
import img5 from './assets/slider_5.gif'
import img6 from './assets/slider_6.gif'
import img7 from './assets/slider_7.gif'
import img8 from './assets/slider_8.gif'
import img9 from './assets/slider_9.gif'
import img10 from './assets/slider_10.gif'
import img11 from './assets/slider_11.gif'
import img12 from './assets/slider_12.gif'
import img13 from './assets/slider_13.gif'
import img14 from './assets/slider_14.gif'


const Firstcard = () => {
  return (
    // <div>
        <>
        <div className=''>
        <div className='mt'>
          {
            Data.map((d)=>(
              <div   className="rounded">
                <img  className= ""src={d.img} alt=""/>
                <div className='ptag'>
                  <p >{d.name}</p>
                  </div>
                </div>

            ))
          }

        </div>
      
         </div>
   
        </>

    // {/* </div> */}
  )
}


 const Data=[
    {
      name: 'Best deal',
      img:img1,
    },
    {
      name: 'same day delivery',
      img:img2
    },
    {
      name: 'sofa sets',
      img:img3
    },
    {
      name: 'lights & lamps',
      img:img4
    },
    {
      name: 'air conditioners',
      img:img5
    },
    {
      name: 'refrigertor',
      img:img6
    },
    {
      name: 'inventer batteries',
      img:img7
    },
    {
      name: 'mixers',
      img:img8
    },
    {
      name: 'fashion',
      img:img9
    },
    {
      name: 'home dector',
      img:img10
    },
    {
      name: 'Grocery',
      img:img11
    },
    {
      name: 'carpets',
      img:img12
    },
    {
      name: 'storage',
      img:img13
    },
    {
      name: 'office chair',
      img:img14
    },
    
  ]


export default Firstcard