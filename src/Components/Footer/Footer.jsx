import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
              {/*get in touch*/}
     <section className="upper-footer-custom">
        <div className="container custom-upper-content">
          <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
             <img src={require('../images/logo_footer.png')} className="img-fluid"/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus diam arcu, placerat<br /> utodio ultrices vehicula erat mauris diam egestas nec lacus sit amet.</p>  
            <img src={require('../images/footer_devider.png')} className="img-fluid" />
             </div> 
             </div>
                  
                  <div className="custom-contact-upper">
                  <div className="row">
             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="upper-phone text-center">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p><strong>(300) 123 456 789 - 888</strong></p>
                </div>    
             </div>   

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="upper-phone text-center">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p><strong>65 Huge Street, Melbourne Victoria 3050 <br />Australia.</strong></p>
                </div>    
             </div>   

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="upper-phone text-center">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <p><strong>Infor@hugeshop.com</strong></p>
                </div>    
             </div> 
             </div>   
          </div>        
        </div>        
                <hr />
        {/*another container */}
          <div className="container custom-another-container">
          <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-list-items">
                 <h5><strong>Company</strong></h5>
                 <ul>
                 <li>About Us </li>
                 <li>Affiliate Program</li>
                 <li>Careers</li>
                 <li>Press Releases </li>
                 <li>Terms &amp; Conditions </li>
                 <li>Contact Us </li>
                 </ul> 
              </div> 

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-list-items">
                 <h5><strong>Customer Service</strong></h5>
                 <ul>
                 <li>Help & Faq</li>
                 <li>Order Returns</li>
                 <li>Guarantee</li>
                 <li>Shipping & Policies</li>
                 <li>Search & Terms</li>
                 <li>Store Locations</li>
                 </ul> 
              </div> 

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-list-items">
                 <h5><strong>My Account</strong></h5>
                 <ul>
                 <li>My Orders</li>
                 <li>My Credit Slips</li>
                 <li>My Adressess</li>
                 <li>My Personal Info</li>
                 <li>Specials</li>
                 </ul> 
              </div> 

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                 <h5><strong>Follow Us</strong></h5>
                 <ul className="list-inline footer-social">
                 <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                 <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                 <li className="list-inline-item"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                 <li className="list-inline-item"><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                 </ul> 
              </div>  
          </div>

          </div>      
        {/*end container */}
     </section>
    {/*end get in touch */}
                </footer>
         </div>
    )
  }
}

export default Footer
