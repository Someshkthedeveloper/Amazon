import React from 'react'
const Sec1card = ({img,name}) => {
    return (
            <div className="s1-containar">
                <>
                    <div className="img">
                    <img src={img} alt="" /></div>
                    <div className="text">
                    <h2>{name}</h2></div>
                </>
        </div>
    )
}

export default Sec1card