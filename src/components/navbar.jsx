import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button"
import whatsapp from "../assets/icons/png/whatsapp.png"
function Navbar() {
  return (
    <>
      <div className='nav' style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='locale' style={{ width: "10rem", display: "flex", justifyContent: "center", backgroundColor: "#160D08", color: "white" }}>

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
                style={{ padding: "0" }}
              >
                <i class="fas fa-globe" style={{ fontSize: "small" }}> &nbsp;<span style={{ fontSize: "12px" }}>EN</span></i>
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
        <div className='advert' style={{ textAlign: "center", backgroundColor: "black", color: "white", }}>SALES BEGINS. FREE SHIPPING ON ALL ORDERS</div>
        <div className='chat' style={{
          width: "12rem", backgroundColor: "#27B03F", color: "white", display: "flex", justifyContent: "center", alignItems: "center",
        }}><img style={{ marginRight: "0.3rem", width: "1rem", height: "1rem", }} src={whatsapp} alt="" />Chat with us</div>

      </div>

      <div className='menu'>
        <div style={{ display: "flex", justifyContent: "space-evenly", height: "88px", width: "100%" }}>
          <div className='yellowBox' style={{ width: "10rem", backgroundColor: "yellow" }}></div>

          <div className='menu-list' style={{ paddingTop: "0.6rem" }}>
            <div className='nav-mobile' style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "20%", }}>
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
                      style={{ padding: "0" }}
                    >
                      <span class="" style={{ paddingLeft: "1.1rem" }} > All Categories</span>
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
              <div style={{ width: "60%", display: "flex", justifyContent: "space-between" }}>
                <div><InputText placeholder='What are you looking for?' style={{ width: "12rem", border: "0", padding: "0" }} /></div>
                <div>
                  <div className="template">
                    <Button className="google p-0" aria-label="Google" style={{ borderRadius: "0" }}>
                      <span className="px-3">Search</span>
                      <i className="pi pi-search " style={{ padding: "0.3rem" }}></i>
                    </Button>
                  </div>
                </div>
              </div>
              <div style={{ width: "20%", display: "flex", justifyContent: "space-evenly" }}>
                <div><i className="pi pi-cart-plus"></i></div>
                <div>
                  <nav class="navbar navbar-expand-lg navbar-light bg-light profile">
                    <div class="container-fluid">
                      <ul class="navbar-nav">
                        {/* <!-- Avatar --> */}
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            style={{ padding: "0" }}
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                              class="rounded-circle"
                              height="22"
                              alt="Portrait of a Woman"
                              loading="lazy"
                            />
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                              <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">Logout</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg menu-bar ">
              {/* <!-- Container wrapper --> */}
              <div class="container-fluid">
                {/* <!-- Toggle button --> */}
                <div className="menuSearch">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-bars"></i>
                  </button>
                  <i className="pi pi-search search-mobile" style={{ padding: "0.3rem" }}></i>
                </div>
                <div className='cartProfile'>
                  <i className="pi pi-cart-plus"></i>

                  <nav class="navbar navbar-expand-lg navbar-light bg-light profile">
                    <div class="container-fluid">
                      <ul class="navbar-nav">
                        {/* <!-- Avatar --> */}
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            style={{ padding: "0" }}
                          >
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                              class="rounded-circle"
                              height="22"
                              alt="Portrait of a Woman"
                              loading="lazy"
                            />
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                              <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">Logout</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* <!-- Collapsible wrapper --> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* <!-- Navbar brand --> */}
                  {/* <!-- Left links --> */}
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        T-shirts
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">NBA</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Tracksuits
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Product Delivery . 1-2days</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Reviews </a>
                    </li>

                  </ul>
                  {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}

                {/* <!-- Right elements --> */}

                {/* <!-- Right elements --> */}
              </div>
              {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}

          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar