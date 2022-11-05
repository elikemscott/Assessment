import React from 'react'

function Navbar() {
  return (
    <>
    <div className='nav' style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{width:"25%", backgroundColor:"grey", color:"white"}}>
            
            <ul class="navbar-nav">
      {/* <!-- Icon dropdown --> */}
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-globe" style={{fontSize:"small"}}></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#"
              ><i class="flag-united-kingdom flag"></i>English
              <i className="fa fa-check text-success ms-2"></i
            ></a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
          </li>
        </ul>
      </li>
    </ul>
            </div>
        <div style={{width:"50%", backgroundColor:"black", color:"white"}}>Ad</div>
        <div style={{width:"25%", backgroundColor:"green", color:"white"}}>whatsapp</div>

   </div>

   <div className='menu'>
    <div style={{display:"flex", justifyContent:"space-between", height:"4rem"}}>
        <div style={{width:"10%", backgroundColor:"yellow"}}></div>
        <div style={{width:"80%", backgroundColor:"white"}}></div>
    </div>
   </div>
   
    </>
  )
}

export default Navbar