import React, {useState, useEffect} from 'react'
// import Carousel from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rewards from './rewards';


function Main() {
    const [state, setState] = useState({
        popular:null
    })

    const popularItems = () => {
    
        const items = state.popular.map((item) => {
            return(
                <>
                <div>{item.name}</div>
                <div>{item.image}</div>
                <div>{item.price}</div>
                </>
            )
        })
    }
    
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

  return (
    <>
    <div style={{margin:"0px 3rem"}}>
    <div className='grid contacts'>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3 '>A</div>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3'>B</div>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3'>C</div>
        <div className='col-12 sm:col-6 md:col-3 lg:col-3'>D</div>
    </div>
    <Rewards/>
    <div className='popular'>
        <h4>Most Popular T-Shirts</h4>
    {/* <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>; */}
<Carousel
responsive={responsive}>
    <div> Item 1</div>
    <div> Item 1</div>
    <div> Item 1</div>
    <div> Item 1</div>

</Carousel>

    </div>

    <div className='country-league'>
    <h4>Country League</h4>
    <div  style={{display:"flex", justifyContent:"space-between"}}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
    </div>
    </div>
    <div className='other-collections'>
        <h4>Other Collections</h4>
        <div className="grid">
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Kids</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Large</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">GoalKeeper</div>
</div>
        <div className="grid">
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Pro Player</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Shorts</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-4">Socks</div>
</div>
    </div>
    
    <div className='socials'>
    <div className="grid">
    <div className="col-12 sm:col-12 md:col-6 lg:col-6">Personalization</div>
    <div className="col-12 sm:col-12 md:col-6 lg:col-6">Socials</div>
    
</div>

    </div>
    </div>
   
    </>
  )
}



export default Main