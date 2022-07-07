import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <div>
    <nav class="navbar1">
        <div class="container-fluid">
            
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header">
            
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">RESTORE OFFICES</a>
          </div>
      <div class="icon">
        <img src="officeimages/th (3).jpg" class="icon1"/>
       
        <img src="officeimages/th (5).jpg" class="icon1"/>
      </div>
          
            <ul class="nav navbar-nav navbar-right">
              <li><a href="index.html">ABOUT US</a></li>
            
            </ul>
          </div>
          </nav>
        </div>
     
    
   
            
        );
    }
}
 
export default Navbar;