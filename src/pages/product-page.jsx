import React, { useState, useEffect } from 'react'
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import "../../src/product.css"
import axios from "axios";
import { useLocation } from "react-router-dom"
import { InputText } from 'primereact/inputtext';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


// function Product() {
//     const images = [
//         {
//           original: 'https://picsum.photos/id/1015/1000/600/',
//           thumbnail: 'https://picsum.photos/id/1018/250/150/',
//         },
//         {
//           original: 'https://picsum.photos/id/1015/1000/600/',
//           thumbnail: 'https://picsum.photos/id/1015/250/150/',
//         },
//         {
//           original: 'https://picsum.photos/id/1019/1000/600/',
//           thumbnail: 'https://picsum.photos/id/1019/250/150/',
//         },
//       ];
//   return (
//     <>
//     <div>Breadcrumb</div> 
//     <div className='product' style={{margin:"0rem 10rem", width:"", height:"", }}>
//          <div className="" style={{display:"flex", justifyContent:"space-evenly"}} >
//     <div className="col-12 sm:col-12 md:col-6 lg:col-6" style={{width:"560px", height:"560px"}}>Image and thumbnails
//     <ImageGallery items={images}/>
//     </div>
//     <div style={{width:"560px", height:"560px"}}>
//         <h6>Manchester United 21-22 Home Shirt</h6>
//         <div className='price' style={{display:"flex", justifyContent:'space-between'}}>
//         <div className='price-column' style={{display:"flex", justifyContent:"space-between"}}>
//             <div>30.00</div>
//             <div>85.99</div>
//             <div>Save</div>
//         </div>
//         <div>Add to favorites</div>
//     </div>
//     <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure error et aliquam, officia, 
//         nihil rem sapiente laboriosam expedita dolorem obcaecati consectetur deleniti deserunt ea dolorum 
//         numquam, vel ex molestias dignissimos. <a href='www.'>Read more..</a>
//         </div>
//         <div>
//         <div className='' style={{display:"flex", justifyContent:"space-between"}}>
//                 <div className=''>Size<span style={{color:"red"}}>*</span></div>
//                 <div className='' style={{padding:"0"}}><Dropdown style={{padding:"0 !important"}} placeholder='Select a shirt size'/></div>
//                 <div className=''><Button label="Secondary" className="p-button-outlined p-button-secondary" /></div>
//             </div>
//         </div>
//     </div>


//     {/* <div className="col-12 sm:col-12 md:col-6 lg:col-6">Descriptions
//     <h4>Manchester United 21-22 Home Shirt</h4>
//     <div className='price' style={{display:"flex", justifyContent:'space-between'}}>
//         <div className='price-column' style={{display:"flex", justifyContent:"space-between"}}>
//             <div>30</div>
//             <div>85</div>
//             <div>Save</div>
//         </div>
//         <div>Add to favorites</div>
//     </div>
//     <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure error et aliquam, officia, 
//         nihil rem sapiente laboriosam expedita dolorem obcaecati consectetur deleniti deserunt ea dolorum 
//         numquam, vel ex molestias dignissimos. <a href='www.'>Read more..</a>
//         </div>
//         <div className='form'>
//             <div className='grid' >
//                 <div className='col-12 md:col-4 lg:col-4'>size</div>
//                 <div className='col-12 md:col-6 lg:col-6'>dropdown</div>
//                 <div className='col-12 md:col-2 lg:col-2'>chart</div>
//             </div>
//             <div className='grid' >
//                 <div className='col-12 md:col-4 lg:col-4'>name</div>
//                 <div className='col-12 md:col-8 lg:col-8'>input</div>
//             </div>
//             <div className='grid' >
//                 <div className='col-12 md:col-4 lg:col-4'>Number on shirt</div>
//                 <div className='col-12 md:col-8 lg:col-8'>input</div>
//             </div>
//             <div className='grid' >
//                 <div className='col-12 md:col-4 lg:col-4'>Patch</div>
//                 <div className='col-12 md:col-8 lg:col-8'>dropdown</div>
//             </div>
//             <div className='grid' >
//                 <div className='col-12 md:col-4 lg:col-4'>quantity</div>
//                 <div className='col-12 md:col-8 lg:col-2'>dropdown</div>
//                 <div className='col-12 md:col-8 lg:col-8'></div>
//             </div>


//         </div>
//         <div>Add to cart button</div>
//     </div> */}
// </div>

//     </div>
//     </>
//   )
// }
function Product() {
    const location = useLocation()
    console.log(location);
    const slug = location.state?.slug
    const [index, setIndex] = useState(0)
    const [product, setProduct] = useState([])
    const [picture, setPicture] = useState([])
    const [productName, setProductName] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://camiestas-futbol.effectstudios.co/api/v1/product-single/${slug}`).then((res) => {
            // console.log(res.data.banners.data);
            setProduct(res.data.product)
            setPicture(res.data.product.gallery)
            console.log(res.data.product);
            setIsLoading(false)
        }).catch((e) => { console.log(e); setIsLoading(true) })
    }, [])
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    const next = () => {
        if (img.length > index) {
            setIndex(index + 1)
        }
    }

    const gallery = picture
    console.log(gallery);

    let imag = gallery.map(({ image }) => image)
    console.log(imag);

    let img = ["https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg",
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg",
        "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg",]
    return (
        <>
            {isLoading ? <ProgressSpinner style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }} /> :

            


<div>
<Navbar/>
                < div class="card-wrapper" >
                  
                    <div class="card">
                        {/* <!-- card left --> */}
                        <div class="product-imgs">
                            <div class="img-display">
                                <div class="img-showcase" style={{ transform: `translateX(calc(-${index * 100}%))` }}>
                                    {imag.map((src, i) => <img alt="shoe image" src={src} />
                                    )}


                                </div>
                            </div>
                            <div class="img-select">
                                {imag.length > 1 && imag.map((src, i) => {

                                    return (
                                        <div class="img-item" onClick={() => { console.log(i); setIndex(i) }}>
                                            <a href="#" >
                                                <img src={src} style={{ opacity: i === index ? "1" : "0.5" }} alt="shoe image" />
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div class="product-content">
                            <h5>{product?.product_name}</h5>

                            <div class="product-price">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>  <span class="last-price">30.00 &nbsp; <span>$89.00</span>&nbsp; <span style={{ backgroundColor: "#23C353", width: "30px", color: "white", padding: "0.1rem", textDecoration: "none", fontSize: "16px" }}>Save&nbsp;67%</span> </span>  <span style={{
                                    width: "145px",
                                    border: "1px solid lightgrey",
                                    fontSize: "12px", fontWeight: "400",
                                    display: "flex",
                                    alignItems: "center", cursor: "pointer",

                                    justifyContent: 'center'
                                }}><span><i className="pi pi-heart" style={{ 'fontSize': '0.8em' }}></i></span> &nbsp;<span>Add to favorites</span></span></div>
                            </div>

                            <div class="product-detail">

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>

                            </div>

                            <div className='inputField' style={{ display: "flex" }}>
                                <div className='label'>Size<span style={{ color: "red" }}>*</span></div>
                                <div className='input' style={{ padding: "0" }}><Dropdown style={{ padding: "0 !important" }} placeholder='Select a shirt size' /></div>
                                <div className='' style={{
                                    width: "145px",
                                    border: "1px solid lightgrey",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    display: "flex",
                                    alignItems: "center", cursor: "pointer",
                                    justifyContent: 'center',
                                    marginLeft: "auto"
                                }}>View size chart</div>
                            </div>
                            <div className='inputField' style={{ display: "flex", justifyContent: "" }}>
                                <div className='label' style={{}}>Name<span style={{ color: "red" }}>*</span></div>
                                <div className='input' style={{ padding: "0" }}><InputText style={{ padding: "1px", borderRadius: "0" }} placeholder="What name would you want on the shirt" /></div>

                            </div>
                            <div className='inputField' style={{ display: "flex", justifyContent: "" }}>
                                <div className='label' style={{}}>Number on shirt</div>
                                <div className='input' style={{ padding: "0" }}><InputText style={{ padding: "1px", borderRadius: "0" }} placeholder="Enter number between 0-99" /></div>

                            </div>
                            <div className='inputField' style={{ display: "flex" }}>
                                <div className='label'>Patch</div>
                                <div className='input' style={{ padding: "0" }}><Dropdown style={{ padding: "0 !important" }} placeholder='Select patch' /></div>

                            </div>
                            <div className='inputField' style={{ display: "flex" }}>
                                <div className='label'>Quantity</div>
                                <div className='input' style={{ padding: "0" }}><Dropdown style={{ padding: "0 !important", width: "7rem" }} placeholder='Select patch' /></div>

                            </div>
                            <div className="checkout">
                                <Button className="addCart google p-0" aria-label="Google" style={{ borderRadius: "0" }}>
                                    <span className="px-3">Add to cart</span>
                                    <i className="pi pi-shopping-cart " style={{ padding: "1rem"  }}></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Footer/>
                </div>
            }
        </>
    )
}

export default Product