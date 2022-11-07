import React, { useState, useEffect } from 'react'
import { Button } from "primereact/button"
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from "axios"

function Carousel() {
  const [banners, setBanners] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios.get(" https://camiestas-futbol.effectstudios.co/api/v1/banner").then((res) => {
      // console.log(res.data.banners.data);
      setBanners(res.data.banners.data)
      setIsLoading(false)
    }).catch((e) => { console.log(e); setIsLoading(true) })


  }, [])
  console.log(banners, isLoading);
  return (
    <>

      <div style={{}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ height: "50vh" }}>
            { }
            {!isLoading ? banners.map(({ image, btn_text, content }) => { return Item(image, btn_text, content) }) : ""}

          </div>


          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ display: "none" }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ display: "none" }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel

function Item(img, title, txt) {
  console.log(img);
  return <div className="carousel-item active" style={{ background: `url(${img})` }} >
    {/* <img src={img} className="d-block w-100" alt="Wild Landscape" /> */}
    <div className="carousel-caption d-none d-md-block hero-caption" >
      <h5>{title}</h5>
      <p>{txt}</p>
    </div>
    <div className='shop-button'>
      <div className="shop-action">
        <Button className="google p-0" aria-label="Google" style={{ borderRadius: "0" }}>
          <span className="px-3">Shop</span>
          <i className="pi pi-shopping-bag " style={{ padding: "0.3rem" }}></i>
        </Button>
      </div>
    </div>
  </div>
}
