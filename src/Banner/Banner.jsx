import React from 'react'
import img from './assts/Amazon.png'
import './Banner.css'
import img2 from './assts/Search.svg'
import img3 from './assts/cart.png'
import {data} from './Banner.js'
const Banner = () => {
    return (
        <div className='flex Banner'id='banner' >
            <div className="logo">
                <img src={img} alt=""/>
            </div>
            <div className="location">
                <h4>Delivery to Chennai 600001 <br />  
                <span> Update location</span></h4>
            </div>
            <div className="flex input">
                <div className='select'>
                    <select name="Products" id="">
                        <option>All</option>
                        {data.map((x)=><option name={x.name}>{x.name}</option>)}
                    </select>
                </div>
                <div className='text'> <input type="text" /></div>
                <div className='search'>
                    <img src={img2} alt="" />
                    </div>
                

            </div>
            <div className="lang">
                EN
            </div>
            <div className="sign">
            <h4>Hello,sign in <br/>
            <span>Account & Lists</span></h4>
            </div>
            <div className="return">
                <h4>Return <br /> 
                <span> & Orders</span></h4>
            </div>
            <div className="cart">
                <img src={img3} alt="" />
            <span>Cart</span>

            </div>
        </div>
    )
}

export default Banner