import { useState } from 'react'
import './ak.css'
import { Data } from './cardone'
import Image from './assets/ac5.gif'
import { slide } from './slide'
import ok from './assets/ac14.gif'
import oke from './assets/ac15.gif'
function Routerpage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='name1'>
      <p >1-24 of 38 results</p>
    </div>
    <div className='header'>
      <div className='slider'>
         <div className='child'>
           <h4>Deals & Discounts</h4>
            <a href=''>Freedom Sale</a>
         </div>
         <div className='child'>
           <h4>Delivery Day</h4>
           <p><input type="checkbox" />Get It by Tomorrow</p>
           <p><input type="checkbox" />Get It in 2 Days</p>

         </div>
         <div className='child'>
            <h4>Capacity</h4>
            <p><input type="checkbox" />Up to 1.9</p>
            <p><input type="checkbox" />2 to 2.9</p>
            <p><input type="checkbox" />4 & above</p>
            <p><input type="checkbox" />Up to 39 pt</p>
         </div>
         <div className='child'>
            <h4>Brands</h4>
             <p><input type="checkbox" />Godrej</p>
             <p><input type="checkbox" />Voltas</p>
             <p><input type="checkbox" />LG</p>
             <p><input type="checkbox" />Panasonic</p>
             <p><input type="checkbox" />Blue Star</p>
         </div>
         <div className='child'>
           <h4>Customer Reviews</h4>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
         </div>
           <div className='clo'>
              <img src={Image}  className='child'/>
           </div>
          <div className='child'>
            <h4>Capacity</h4>
            <p><input type="checkbox" />Up to 1.9</p>
            <p><input type="checkbox" />2 to 2.9</p>
            <p><input type="checkbox" />4 & above</p>
            <p><input type="checkbox" />Up to 39 pt</p>
         </div>
         <div className='child'>
            <h4>price</h4>
            <p><input type="checkbox" />Under ₹500</p>
            <p><input type="checkbox" />₹1,000 - ₹2,000</p>
            <p><input type="checkbox" />₹3,000 - ₹5,000</p>
            <p><input type="checkbox" />Over ₹3,000</p>
         </div>
         <div className='child'>
            <h4>star</h4>
            <p><input type="checkbox" />2 star</p>
            <p><input type="checkbox" />4 star</p>
            <p><input type="checkbox" />5 star</p>
            <p><input type="checkbox" />6 star</p>
         </div>
         <div className='child'>
            <h4>Capacity</h4>
            <p><input type="checkbox" />Up to 1.9</p>
            <p><input type="checkbox" />2 to 2.9</p>
            <p><input type="checkbox" />4 & above</p>
            <p><input type="checkbox" />Up to 39 pt</p>
         </div>
         <div className='child'>
            <h4>filter</h4>
            <p><input type="checkbox" />High Density Filter</p>
            <p><input type="checkbox" />Filter</p>
            <p><input type="checkbox" />NsityFilter</p>
            <p><input type="checkbox" />Density Filter</p>
         </div>
         <div className='child'>
            <h4>Discounts</h4>
            <p>10% Off or more </p>
            <p>20% Off or more</p>
            <p>40% Off or more</p>
            <p>50% Off or more</p>
         </div>
         <div className='child'>
            <h4>Indoor Unit Width</h4>
            <p><input type="checkbox" />45 to 69 cm</p>
            <p><input type="checkbox" />Up to 39 pt</p>
            <p><input type="checkbox" />Up to 39 pt</p>
            <p><input type="checkbox" />4 & above</p>
         </div>
         <div>
          <div className='clo'>
              <img src={ok}  className='child'/>
           </div>
           {
             slide.map((s)=>(
               <div>
                  <div className='child'>
                    <h4>{s.title}</h4>
                    <p><input type="checkbox" />{s.t1}</p>
                    <p><input type="checkbox" />{s.t2}</p>
                    <p><input type="checkbox" />{s.t3}</p>
                    <p><input type="checkbox" />{s.t4}</p>
                  </div>
               </div>
             ))

           }
            <div className='clo'>
              <img src={oke}  className='child'/>
            </div>
            <div className='child'>
              <h4>price</h4>
              <p><input type="checkbox" />Under ₹500</p>
              <p><input type="checkbox" />₹1,000 - ₹2,000</p>
              <p><input type="checkbox" />₹3,000 - ₹5,000</p>
              <p><input type="checkbox" />Over ₹3,000</p>
            </div>
            <div className='child'>
             <h4>Discounts</h4>
              <p>10% Off or more </p>
              <p>20% Off or more</p>
              <p>40% Off or more</p>
              <p>50% Off or more</p>
            </div>
         </div>

      </div>
      <div className='cardd'>
          {
            Data.map((d)=>(
              
               <div className='card1'>
                  <div className='card2'>
                    <img src={d.Image} />
                  </div>

                  <div className='card3'>
                    <a href="url" className='ang'>{d.name}</a>
                     <div className='card7'>
                       <p className='card4'>{d.price}</p>
                       <p className='card4'><s>{d.price1}</s></p>
                       <p className='card4'>{d.price2}</p>
                     </div>
                    <p className='card4'>{d.emi}</p>
                    <p className='card4'>{d.del}</p>
                    <p className='card4'>{d.ser}</p>
                  </div>

                  <div className='card5'>
                    <button className='btn'>Add to card</button>
                  </div>

                </div>
              

               
            ))
          }
      </div>
    </div>
       

    </>
  )
}


export default Routerpage
