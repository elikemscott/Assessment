import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import fb from "../assets/icons/png/facebook-f-black.png"
import tw from "../assets/icons/png/twitter-black.png"
import ig from "../assets/icons/png/instagram-black.png"
import partners from "../assets/images/payment-partners.png"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <>
            <div className='footer' style={{margin:"0rem 3rem"}}>
                <div className=" footer-sub" style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="">
                       <h6>Main Menu</h6> 
                        <ul style={{listStyleType:"none", padding:"0"}}>
                           <Link><li>Home</li></Link> 
                           <Link><li>T-Shirts</li></Link> 
                           <Link><li>NBA</li></Link> 
                           <Link><li>Tracksuits</li></Link> 
                           <Link><li>Product delivery 1-2days</li></Link> 
                           <Link><li>Contact</li></Link> 
                           <Link><li>Reviews</li></Link> 
                        </ul>
                    </div>
                    <div className="">
                        <h6>Secondary Menu</h6>
                        <ul style={{listStyleType:"none", padding:"0"}}>
                        <Link><li>Search</li></Link>
                        <Link><li>Privacy Policy</li></Link>
                        <Link><li>Shipping Policy</li></Link>
                        <Link><li>Return Policy</li></Link>
                        <Link><li>Terms of Service</li></Link>
                        </ul>
                    </div> 
                    <div className="">
                       <h6>Subscribe</h6> 
                       <span>Subscribe to our mailing list to <br/> receive the latest news</span>
                       <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <InputText style={{padding:"0"}} placeholder="Email Address"/>
                            <Button  className="p-button-warning"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00571428 12L12 6L0.00571428 0L0 4.66667L8.57143 6L0 7.33333L0.00571428 12Z" fill="#111112"/>
</svg></Button>
                        </div>
                    </div>
                    </div>
                    <div className="follow">
                        <h6>Follow</h6>
                        <div class = "social-links">
        <a href = "#">
          <i class = "fab fa-facebook-f"></i>
        </a>
        <a href = "#">
          <i class = "fab fa-twitter"></i>
        </a>
        <a href = "#">
          <i class = "fab fa-instagram"></i>
        </a>
      </div>

                        </div>
                </div>
                <hr/>
                <div className="copyright" style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="copyrightName"> &copy; Jambulani . All Rights Reserved</div>
                    <div className=" partners"><img src={partners} alt="" /></div>
                </div>
                
            </div>
        </>
    )
}

export default Footer