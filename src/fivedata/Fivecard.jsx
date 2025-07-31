import React from 'react'

const Fivecard = (props) => {
  return (
    
    <div className='five_card'>
       
        <div className="elect_img">
            <img src={props.img} alt="" style={{width:"60%"}} />
        </div>
        <div className="elect_paro">
            <h3>
               {props.prodecrdeatil}
               {/* agaasas */}
            </h3>
        </div>
        {/* <div className="rating_elect">
              {props.off}
        </div> */}

        <div className="offer">
            <div className="but_offer">
                <button className='offer_but'>{props.off}</button>
            </div>
            <div className="lim_off">
                <h4>
                    {props.limet}
                </h4>
            </div>
        </div>

            <div className="elect_mrp">
                <h4>
                   mrp: {props.price}
                </h4>
            </div>
            <div className="data_offer_elect">
                <p>
                    {props.offerdate}
                </p>
            </div>
           
    </div>
  )
}

export default Fivecard