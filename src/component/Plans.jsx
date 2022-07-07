import React from 'react';

function Plans(props) {
    return ( 
        

<div class="container ">
  <div class="row US">
    <h3 class="text-center">PLANS</h3>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="officeimages/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" class="pic1"/>
        <div class="caption">
          <h3>VIRTUAL {props.title}</h3>
          <p>Our virtual offices allow your business to get our location 
              address, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="officeimages/toa-heftiba-FV3GConVSss-unsplash.jpg" alt="..."/>
        <div class="caption">
          <h3>SERVICED {props.title}</h3>
          <p>Our customised offices offer a great location for your business 
            and you office to suit your preferences.Also, you become a member of our community with
            benefits such as access to our meeting rooms. 
          </p>
    </div>
    </div>
    </div>
    

    <div class="col-md-3">
        <div class="thumbnail">
          <img src="officeimages/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg" alt="..."/>
          <div class="caption">
            <h3>CONFERENCE {props.place}</h3>
            <p>Our serviced offices offer a great location for your business 
                and we provide services such as internet,utilities and others from our partners.
                Also you become a memeber of our community with benefits such as access to our meeting rooms.
            </p>
         </div>
         </div>
      </div>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="officeimages/damir-kopezhanov-luseu9GtYzM1-unsplash.jpg" alt="..." class="pic1"/>
        <div class="caption">
          <h3>MEETING {props.place}</h3>
          <p>Our meeting rooms offer a great location for your meeting with your clients or business partners 
            We provide presentations equipments and coffee. Also you become a member of our community with benefits
             such as access to our meeting rooms.
          </p>
        </div>
      </div>
    </div>
   </div>
  </div>

     );
}

export default Plans;