import React from 'react'
import flag from './assets/27130.jpg'
import amazon from './assets/Amazon-Logo-White-Transparent.png'
const Footer = () => {
  return (
    <>
    <div className='footer-main'>
        <div className='backtotop' >
            
            <a href="#"><h2 className='h3tag'>Back To Top</h2></a>
        </div >



<div className="line">
        <div className='footerpage'>
            <div>
                <h2>Get to Know Us</h2>
                <h3>Aoumt amazon</h3>
                <h3>careers</h3>
                <h3>press Releases</h3>
                <h3>Amazon science</h3>


            </div>
            <div>
                <h2>Connect with Us</h2>
                <h3>Facebook</h3>
                <h3>Twitter</h3>
                <h3>Instagram</h3>

            </div>
            <div>
                <h2>Make Money with Us</h2>
                <h3><a href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT" class="nav_a">Sell under Amazon Accelerator</a></h3>
                <h3><a href="/b/?node=2838698031&amp;ld=AZINSOANavDesktopFooter_C&amp;ref_=nav_footer_sell_C" class="nav_a">Sell on Amazon</a></h3>
                <h3><a href="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&amp;ld=AOINABRLGNRFOOT" class="nav_a">Protect and Build Your Brand</a></h3>
                <h3><a href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&amp;ref=AZIN_Footer_V1" class="nav_a">Amazon Global Selling</a></h3>
                <h3><a href="https://supply.amazon.com/?ref_=footer_sta&amp;lang=en-IN" class="nav_a">Supply to Amazon</a>
            </h3>
                <h3><a href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&amp;utm_medium=footer&amp;utm_source=GW&amp;ref_=footer_assoc" class="nav_a">Become an Affiliate</a></h3>
                <h3><a href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter" class="nav_a">Fulfilment by Amazon</a></h3>
                <h3><a href="https://advertising.amazon.in/?ref=Amz.in" class="nav_a">Advertise Your Products</a></h3>
                <h3><a href="https://www.amazonpay.in/merchant" class="nav_a">Amazon Pay on Merchants</a></h3>
            </div>
            <div>
                <h2>Let Us Help You</h2>
                <h3><a href="/gp/css/homepage.html?ref_=footer_ya" class="nav_a">Your Account</a></h3>
                <h3><a href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4" class="nav_a">Returns Centre</a></h3>
                <h3><a href="https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa" class="nav_a">Recalls and Product Safety Alerts</a></h3>
                <h3><a href="/gp/help/customer/display.html?nodeId=201083470&amp;ref_=footer_swc" class="nav_a">100% Purchase Protection</a></h3>
                <h3><a href="/gp/browse.html?node=6967393031&amp;ref_=footer_mobapp" class="nav_a">Amazon App Download</a></h3>
                <h3><a href="/gp/help/customer/display.html?nodeId=200507590&amp;ref_=footer_gw_m_b_he" class="nav_a">Help</a></h3>
            </div>





        </div>
        
        {/* <div className="footerdown">
            <div className="ama">
                  <img src="" alt="" />
            </div>
            <div className="all_language">
                <button>English</button>
            </div>
            <div className="national">
                <button>
                    <div className="total_but">
                    <div ><img src={flag} alt="" className="but_img" /></div>
                    <div className="but_text">
                    <p>india</p>
                    </div>
                    </div>
                    </button>
                    <div>
                       
                    </div>
            </div>
        </div> */}
        <hr className='hr'/>

        <div className="main_footer">
            <div className="img_foot">
                 <img src={amazon} alt="" className="amazon_img" />
            </div>
            <div className="footer_button_op">
                <button>
                    <h1>english</h1>
                </button>
                
            </div>
        </div>
        
        </div>
    </div>
    </>
    
  )
}

export default Footer