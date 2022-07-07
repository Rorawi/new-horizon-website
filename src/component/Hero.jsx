import React from 'react';
 function Hero() {
    return ( 
        <>
        
<div class="container-fluid">
 <div class="row">
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
  
    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="officeimages/campaign-creators-gMsnXqILjp4-unsplash.jpg"alt="corneroffice"/>
        <div class="carousel-caption">
          ...
        </div>
      </div>
      <div class="item">
        <img src="officeimages/nick-fewings-jBmNAt2p8-s-unsplash.jpg" alt=""/>
        <div class="carousel-caption">
          ...
        </div>
      </div>
      ...
    </div>
  
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

 </div>
</div>

        </>
     );
 }
 
 export default Hero;