import React from "react"
import logo from '../assets/images/Vector (5).png'



function Header() {
  return (
    <div className="container-fluid text-light">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 px-5">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src={logo} alt="" style={{height : '40px', width : '40px'}}/>
          <h3 className="">Filmagnet</h3>
        </a>
                       
      </div>
            
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2">HOME</a></li>
        <li><a href="#" class="nav-link px-2">|</a></li>
        <li><a href="#" class="nav-link px-2">MOVIE</a></li>
        <li><a href="#" class="nav-link px-2">|</a></li>
        <li><a href="#" class="nav-link px-2">TV SHOW</a></li>
        <li><a href="#" class="nav-link px-2">|</a></li>
        <li><a href="#" class="nav-link px-2">WEB SERIES</a></li>
        <li><a href="#" class="nav-link px-2">|</a></li>
        <li><a href="#" class="nav-link px-2">PRIMIUM</a></li>
      </ul>

      <div class=" text-end d-flex justify-content-center ">
         <i class="bi bi-search  pe-4"></i>
         <i class="bi bi-globe-americas pe-3"></i>
         <p>EN</p>
         <i class="bi bi-chevron-down pe-4" ></i>
         
         
        <button type="button" >SIGN IN </button>
      </div>
    </header>
  </div>
  )
};

export default Header;
