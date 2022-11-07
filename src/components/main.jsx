import React, { useState, useEffect } from 'react'
// import Carousel from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProgressSpinner } from 'primereact/progressspinner';
// import 'node_modules/primeflex/primeflex.scss'
import Rewards from './rewards';
import HomeShirt from "../assets/images/product-medium.jpg"
import championsleague from "../assets/images/country-leagues/champions-league.jpg"
import caf from "../assets/images/country-leagues/caf.jpg"
import copa from "../assets/images/country-leagues/copa-america.jpg"
import europa from "../assets/images/country-leagues/europa-league.jpg"
import asian from "../assets/images/country-leagues/asian-cup.jpg"
import kids from "../assets/images/other-collections/kids.jpg"
import player from "../assets/images/other-collections/pro-player.jpg"
import goalkeeper from "../assets/images/other-collections/goalkeeper.jpg"
import shorts from "../assets/images/other-collections/shorts.jpg"
import socks from "../assets/images/other-collections/socks.jpg"
import large from "../assets/images/other-collections/large-sizes.jpg"
import shipping from "../assets/skew/truck.jpg"
import phone from "../assets/skew/phone.webp"
import check from "../assets/skew/check.png"
import whatsapp from "../assets/skew/whatsapp.png"
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from 'axios'

function Main() {
  const navigate = useNavigate()
  // const history = useHistory()
  const [state, setState] = useState({
    popular: null
  })

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios.get("https://camiestas-futbol.effectstudios.co/api/v1/popular-products").then((res) => {
      console.log(res.data);
      console.log(res.data.products.data);
      setProducts(res.data.products.data)
      setIsLoading(false)
    }).catch((e) => { console.log(e); setIsLoading(true) })
  }, [])

  console.log(products);

  const popularItems = () => {

    const items = state.popular.map((item) => {
      return (
        <>
          <div>{item.name}</div>
          <div>{item.image}</div>
          <div>{item.price}</div>
        </>
      )
    })
  }

  const collectionList = [
    {
      title: "Kids",
      image: "url(/assets/images/other-collections/kids.jpg)"
    },
    {
      title: "Large Size",
      image: "url(/assets/images/other-collections/large-sizes.jpg)"
    },
    {
      title: "GoalKeeper",
      image: "url(/assets/images/other-collections/goalkeeper.jpg)"
    },
    {
      title: "Authentic/Pro player",
      image: "url(/assets/images/other-collections/pro-player.jpg)"
    },
    {
      title: "Shorts",
      image: "url(/assets/images/other-collections/shorts.jpg)"
    },
    {
      title: "Socks",
      image: "url(/assets/images/other-collections/socks.jpg)"
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const carouselImage = () => {
    return (

      <div className='main-mobile' >
        <div style={{ width: "240px", height: "240px", }}>
          <img src={HomeShirt} alt="Manchester United Home Shirt" />
        </div>
        <div style={{ width: "240px", height: "100px", border: "1px solid #EAEAEC", paddingLeft: "0.6rem", paddingTop: "1rem" }}>
          <span className='team-name'>Manchester United 21-22 <br /> Home Shirt</span>

          <div style={{}}>
            <span className='shirt-price'>€30.00</span>
            <span className='old-price'>€89.95</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading ? <ProgressSpinner style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }} /> :
        <div style={{}}>
          {/* <div className='grid'>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3 contact'>A</div>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3 contact'>B</div>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3 contact'>C</div>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3 contact'>D</div>
    </div> */}

          <div className='main-body mainBox' style={{ display: "flex", justifyContent: "space-between" }}>

            <div className={"cardBox"} style={{ backgroundColor: "#FEFAE1", }}>
              <div style={{ display: "flex", height: "auto" }}>
                <div class="loader" ></div>
                <img className='skew-icon' style={{ transform: "rotate(-0deg)", margin: "0", marginLeft: "-40px", marginTop: "45px", width: "30px", height: "30px" }} src={shipping} alt="" />
              </div>
              <p className='skew-header' style={{fontSize:"14px"}}>Secure Shipping</p>
              <span className='skew-text'>+2338966456</span>
            </div>
            <div className={"cardBox"} style={{ backgroundColor: "#FEFAE1", }}>
              <div style={{ display: "flex", height: "auto" }}>
                <div class="loader" ></div>
                <img className='skew-icon' style={{ transform: "rotate(0deg)", margin: "0", marginLeft: "-40px", marginTop: "45px", width: "30px", height: "30px" }} src={phone} alt="" />
              </div>
              <p className='skew-header' style={{fontSize:"14px"}}>Telephone</p>
              <span className='skew-text'>+2338966456</span>
            </div>
            <div className={"cardBox"} style={{ backgroundColor: "#FEFAE1", }}>
              <div style={{ display: "flex", height: "auto" }}>
                <div class="loader" ></div>
                <img className='skew-icon' style={{ transform: "rotate(0deg)", margin: "0", marginLeft: "-40px", marginTop: "45px", width: "30px", height: "30px" }} src={whatsapp} alt="" />
              </div>
              <p className='skew-header' style={{fontSize:"14px"}}>Chat whatsapp</p>
              <span className='skew-text'>+2338966456</span>
            </div>
            <div className={"cardBox"} style={{ backgroundColor: "#FEFAE1", }}>
              <div style={{ display: "flex", height: "auto" }}>
                <div class="loader" ></div>
                <img className='skew-icon' style={{ transform: "rotate(0deg)", margin: "0", marginLeft: "-40px", marginTop: "45px", width: "30px", height: "30px" }} src={check} alt="" />
              </div>
              <p className='skew-header' style={{fontSize:"14px"}}>Guarantee Quality</p>
              <span className='skew-text'>+2338966456</span>
            </div>


          </div>
          <Rewards />
          <div className='popular main-body'>
            <h4>Most Popular T-Shirts</h4>

            <Carousel
              renderButtonGroupOutside={true}
              responsive={responsive}>
              {products.map(({ id, slug, product_name, gallery }) => { return Slide(id, slug, product_name, gallery) })}
              {/* {[1, 2, 3, 4, 5, 6, 7, 8].map(() => Slide())} */}
              {console.log(products)}
              {/* {!isLoading ? product.map(({ id, description, slug, gallery, product_name }) => { return Slide(id, description, slug, gallery, product_name) }) : ""} */}

            </Carousel>

          </div>

          <div className='country-league main-body'>
            <h4>Country League</h4>
            <div className='league' style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <div className='sub-league' style={{}}>
                <img src={championsleague} alt=" Champions League" />
                <span className='leagues'>Champions League</span>
              </div>
              <div className='sub-league' style={{}}>
                <img src={europa} alt="Europa League" />
                <span className='leagues'>Europa League</span>
              </div>
              <div className='sub-league' style={{}}>
                <img src={copa} alt=" Copa America" />
                <span className='leagues'>Copa America</span>
              </div>
              <div className='sub-league' style={{}}>
                <img src={asian} alt="Asian Cup" />
                <span className='leagues'>Asian Cup</span>
              </div>
              <div className='sub-league' style={{}}>
                <img src={caf} alt="African Nations Cup" />
                <span className='leagues'>African Nations cup</span>
              </div>


            </div>
          </div>
          <div className='other-collections main-body ' style={{ padding: "2rem 0px" }}>
            <h4>Other Collections</h4>
            <div className="collectionCards">

              {collectionList.map(({ title, image }) => collectionCard(title, image))}

            </div>

            {/* <div className="grid">
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Kids</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Large</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">GoalKeeper</div>
</div> */}

            {/* <div className="grid">
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Pro Player</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Shorts</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Socks</div>
</div> */}
          </div>



          <div className='socials main-body' style={{ margin: "1rem 0px" }}>
            <div className="socialCard" style={{
              background: "url(/assets/images/personalization.jpg) "
            }}>
              <div className="overlay">
                <div className="personalization socialContent" style={{ marginRight: "1rem" }} >
                  <p style={{ paddingRight: "1rem", fontWeight: "700", fontSize: "24px", lineHeight: "24px", letterSpacing: "-0.02em" }}> PERSONALIZATION</p>
                  <p style={{ paddingRight: "1rem", fontWeight: "400", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em" }}>Put a custom print on the football shirt of your choice with our <br /> Personalization Service</p>
                  <p style={{ paddingRight: "1rem", fontWeight: "400", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em" }}>Tell us what name, what number and we put it <span style={{ fontSize: "500", fontWeight: "bold" }}>Free!!!</span></p>

                </div>
                {/* <div className="socials">Socials</div> */}
              </div>


            </div>
            <div className="socialCard" style={{
              background: "url(/assets/images/personalization.jpg) "
            }}>
              <div className="overlay">
                {/* <div className="personalization" >Personalization</div> */}

                <div className="socialContent">
                  <p style={{ paddingRight: "1rem", fontWeight: "700", fontSize: "24px", lineHeight: "24px", letterSpacing: "-0.02em", display: "block" }}>SOCIAL NETWORKS</p>
                  <p style={{ paddingRight: "1rem", fontWeight: "400", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em", display: "block" }}>Share your shirts with us the #CamisetasFutbolSpainnn</p>
                  <div class="social-links">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      }

    </>
  )



  function collectionCard(title, image) {
    return <div className='collectionCard' style={{
      background: `${image}`,
    }}>
      <div className='collectionSub' style={{ width: "100%", height: "48px", }}>
        <div className='collection-overlay' style={{ width: "100%", height: "50px", display: "flex", justifyContent: "space-between", paddingLeft: "0.4rem", alignItems: "center" }}>
          <div className='collectionBox' style={{ color: "white", alignItems: "center" }}>{title}</div>
          <div className='collectionIcon' style={{ width: "2.9rem", height: "50px", backgroundColor: "yellow", justifyContent: "center", alignItems: "center", display: "flex" }}>
            <i className="pi pi-caret-right"></i>
          </div>
        </div>
      </div>

    </div>;
  }

  function Slide(id, slug, product_name, gallery) {

    return <div className='productSlide' >
      <div style={{ width: "100%", height: "auto", cursor: "pointer" }} onClick={() => { navigate(`/products/${slug}`, { state: { id, slug } }) }}  >
        <img src={gallery[0]?.image} alt="Manchester United Home Shirt" />
        {/* <div>{id}</div> */}
        {/* <img src={HomeShirt} alt="Manchester United Home Shirt" /> */}
      </div>
      <div style={{ width: "100%", height: "100px", border: "1px solid #EAEAEC", paddingLeft: "0.6rem", paddingTop: "1rem" }}>
        <span className='team-name'>{product_name}</span>
        {console.log(id)}
        {console.log(slug)}
        {console.log(product_name)}
        {console.log(gallery[0]?.image)}

        <div style={{}}>
          <span className='shirt-price'>€30.00</span>
          <span className='old-price'>€89.95</span>
        </div>
      </div>
    </div>;
  }
}



export default Main