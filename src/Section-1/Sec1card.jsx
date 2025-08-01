import React from 'react'
import { BrowserRouter, Router, useNavigate } from 'react-router-dom'

const Sec1card = ({img,name}) => {
    let nav  = useNavigate()
    return (
            <div className="s1-containar">
                <>
               
                    
                    <div className="img" onClick={()=>nav('/products')}>
                    <img src={img} alt="" /></div>
                    <div className="text">
                    <h2>{name}</h2></div>
                </>
        </div>
    )
}

export default Sec1card