import React, { Component } from 'react'
import './Home.css';
export class Home extends Component {
  state = {
    user_name: "",
     email : "",
     subject : "",
     message : ""
 
   };
   change  = e => {
     this.setState ({
       [e.target.name]: e.target.value
     });
   };
   onSubmit = e =>
   {
       e.preventDefault();
       console.log(this.state);
       this.setState ({
        user_name: "",
        email : "",
        subject : "",
        message : ""
     
       })
   };
  render() {
    return (
      <div>
          <div>
    {/*SLIDER HERE */}
     <div className="custom-upper-slider">
     <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('../images/banner1.jpg')} className="img-fluid" alt="Los Angeles"/>
      <div class="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={require('../images/banner2.jpg')} className="img-fluid" alt="Chicago"/>
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={require('../images/banner3.jpg')} className="img-fluid" alt="New York"/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

     </div>


    {/* END SLIDER HERE */}
    {/*bottom slider images */}
      <div className="custom-bottom-images">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            {/* <div className="images-bottom-source">
              <img src={require('../images/slider_bottom_1.jpg')} className="img-fluid" />
            </div>   */}
            <div className="images-bottom-source">
  <img src={require('../images/slider_bottom_1.jpg')} alt="Avatar" className="image"/>
  <div className="middle">
    <div className="text">
    <i className="fa fa-female" aria-hidden="true"></i>    
       <p><strong>Women</strong></p>     
    </div>
  </div>
</div>
            </div>

             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="images-bottom-source">
              <img src={require('../images/slider_bottom_2.jpg')} className="image" />
              <div className="middle">
    <div className="second-text">
    <i className="fa fa-male" aria-hidden="true"></i>    
       <p><strong>Men</strong></p>     
    </div>
  </div>
            </div>  
            </div>

             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="images-bottom-source">
              <img src={require('../images/slider_bottom_3.jpg')} className="image" />
              <div className="middle">
    <div className="second-text">
    <i className="fa fa-male" aria-hidden="true"></i>    
       <p><strong>Kid's</strong></p>     
    </div>
  </div>
            </div>  
            </div>
          </div>
        </div>

      </div>
    {/*end bottom slider images */}
      
    {/* offer section */}
       <section className="trending-carousel">
           <div className="container">
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="trending-header text-center">
                  <h2>Trending Items</h2>
                  <img src={require('../images/section_title.png')} className="img-fluid"/>
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">New Arrival</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Men's</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Women's</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <div class="customNavigation"> <a class="btn prev"><i class="fa fa-caret-left"></i></a> <a class="btn next"><i class="fa fa-caret-right"></i></a> </div>
          <div id="owl-demo" class="owl-carousel">
                  <div class="item">
                  <img src={require('../images/trend_man1.jpg')} alt="Mahi_Product_Slider" className="image" />
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man2.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man3.jpg')} alt="Product_Slider" className="img-fluid"  />
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man4.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item"><img src={require('../images/trend_man5.jpg')} alt="Product_Slider" className="img-lfuid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man6.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">\
                  <img src={require('../images/trend_man7.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
          </div>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div class="customNavigation"> <a class="btn prev"><i class="fa fa-caret-left"></i></a> <a class="btn next"><i class="fa fa-caret-right"></i></a> </div>
          <div id="owl-demo3" class="owl-carousel">
                  <div class="item">
                  <img src={require('../images/trend_man1.jpg')} alt="Mahi_Product_Slider" className="image" />
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man2.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man3.jpg')} alt="Product_Slider" className="img-fluid"  />
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man4.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man5.jpg')} alt="Product_Slider" className="img-lfuid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man6.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man7.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
          </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div class="customNavigation"> <a class="btn prev"><i class="fa fa-caret-left"></i></a> <a class="btn next"><i class="fa fa-caret-right"></i></a> </div>
          <div id="owl-demo4" class="owl-carousel">
                  <div class="item">
                  <img src={require('../images/trend_man1.jpg')} alt="Mahi_Product_Slider" className="image" />
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man2.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man3.jpg')} alt="Product_Slider" className="img-fluid"  />
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man4.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man5.jpg')} alt="Product_Slider" className="img-lfuid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man6.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
                  <div class="item">
                  <img src={require('../images/trend_man7.jpg')} alt="Product_Slider" className="img-fluid"/>
                  <div class="middle-img">
    <div class="text-img text-center">
    <ul>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
            <li><i className="fa fa-bar-chart" aria-hidden="true"></i></li>
            <li><i className="fa fa-heart-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-eye" aria-hidden="true"></i></li>
    </ul>
    </div>
  </div>
                  </div>
          </div>

  </div>
</div>
                </div>

              </div>
           </div>

           </div>   

       </section>
    {/* end offer section */}
            {/*middle-section*/}
  <section className="custom-middle-section-ecom">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="middle-images text-center">
                  <img src={require('../images/service_1.png')} className="img-fluid"/>
                  <h4>Return & Exchange</h4>
                  <p>Committed to return the money in 30 days</p>
                </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="middle-images text-center">
                  <img src={require('../images/service_2.png')} className="img-fluid"/>
                  <h4>RECIEVE GIFT CARD</h4>
                  <p>Committed to return the money in 30 days</p>
                </div>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="middle-images text-center">
                  <img src={require('../images/service_3.png')} className="img-fluid"/>
                  <h4>ONLINE SUPPORT 24/7</h4>
                  <p>Committed to return the money in 30 days</p>
                </div>
                </div>
              </div>
            </div>
              </section>
            {/*end middle section */}
    {/*featured items */}
    <section className="fashion-carousel">
           <div className="container">
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="trending-header text-center">
                  <h2>Featured Items</h2>
                  <img src={require('../images/section_title.png')} className="img-fluid"/>
                </div>

              </div>
           </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="customNavigation"> <a class="btn prev"><i class="fa fa-caret-left"></i></a> <a class="btn next"><i class="fa fa-caret-right"></i></a> </div>
          <div id="owl-demo2" class="owl-carousel">
                  <div class="item"><img src={require('../images/trend_man2.jpg')} alt="Product_Slider" className="img-fluid"/></div>
                  <div class="item"><img src={require('../images/trend_man3.jpg')} alt="Product_Slider" className="img-fluid"  /></div>
                  <div class="item"><img src={require('../images/trend_man4.jpg')} alt="Product_Slider" className="img-fluid"/></div>
                  <div class="item"><img src={require('../images/trend_man5.jpg')} alt="Product_Slider" className="img-lfuid"/></div>
                  <div class="item"><img src={require('../images/trend_man6.jpg')} alt="Product_Slider" className="img-fluid"/></div>
                  <div class="item"><img src={require('../images/trend_man7.jpg')} alt="Product_Slider" className="img-fluid"/></div>
          </div>

                </div>
              </div>
           </div>   

       </section>            
    {/*end featured items */}
     {/*blog */}
     <section className="custom-blog">
        <div className="container">
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h2>LATEST BLOG & NEWS</h2>
                  <img src={require('../images/section_title.png')} className="img-fluid"/>     
              </div>    
           </div>  

           <div className="row custom-rows">
               <div className="col-lg-4 col-md-4 col-sm-12 co-xs-12">
                  <div className="custom-blog-images text-center">
                  <img src = {require('../images/b_n_1.jpg')} className="img-fluid" />
                  <span className="blog-img-bg"></span>
                  <p><strong>FASHION NEWS</strong></p>
                  <h5>BLOG IMAGE POST</h5>
                  <p>Curabitur ullamcorper a erat in pulvinar. Sed dapibus augue libero tincidunt facilisis iaculis 
nec vulputate nisl ultricies. </p>
                  <button type="button" className="btn btn-info custom-blog-btn">Read More </button>
                  </div>  
               </div>

                <div className="col-lg-4 col-md-4 col-sm-12 co-xs-12">
                  <div className="custom-blog-images text-center">
                  <img src = {require('../images/b_n_2.jpg')} className="img-fluid" />
                  <span className="blog-img-bg"></span>
                  <p><strong>LIFESTYLE</strong></p>
                  <h5>POST WITH AUDIO</h5>
                  <p>Etiam tempor nunc viverra urna tincidunt. In at efficitur erat. Donec interdum metus eu odio iaculis nec commodo odio vulputate </p>
                  <button type="button" className="btn btn-info custom-blog-btn">Read More </button>
                  </div>  
               </div>

                <div className="col-lg-4 col-md-4 col-sm-12 co-xs-12">
                  <div className="custom-blog-images text-center">
                  <img src = {require('../images/b_n_3.jpg')} className="img-fluid" />
                  <span className="blog-img-bg"></span>
                  <p><strong>FASHION NEWS</strong></p>
                  <h5>BLOG IMAGE POST</h5>
                  <p>Curabitur ullamcorper a erat in pulvinar. Sed dapibus augue libero tincidunt facilisis iaculis 
nec vulputate nisl ultricies. </p>
                  <button type="button" className="btn btn-info custom-blog-btn">Read More </button>
                  </div>  
               </div>   
           </div>     
        </div>          

     </section> 
      {/*end blog */}
    {/* clients here*/}
       <section className="custom-clients">
             <div className="container">
                 <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <img src = {require('../images/client_1.jpg')} className="img-fluid" />
                  </div>

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <img src = {require('../images/client_2.jpg')} className="img-fluid" />
                  </div>

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <img src = {require('../images/client_3.jpg')} className="img-fluid" />
                  </div>

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <img src = {require('../images/client_4.jpg')} className="img-fluid" />
                  </div>

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <img src = {require('../images/client_5.jpg')} className="img-fluid" />
                  </div>

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <img src = {require('../images/client_1.jpg')} className="img-fluid" />
                  </div>
                 </div> 
             </div>     
       </section>         
    {/*end clients here*/}
    {/*client slider */}
         {/*end client silder */}
 
          
          </div>
        
      </div>
    )
  }
}
export default Home