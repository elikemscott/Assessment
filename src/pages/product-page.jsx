import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

function Product() {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
  return (
    <>
    <div>Breadcrumb</div> 
    <div className='product' style={{margin:"0rem 3rem", width:"1512px", height:"1016px", backgroundColor:"black"}}>
         <div className="grid">
    <div className="col-12 sm:col-12 md:col-6 lg:col-6">Image and thumbnails
    <ImageGallery items={images}/>
    </div>

    <div className="col-12 sm:col-12 md:col-6 lg:col-6">Descriptions
    <h4>Manchester United 21-22 Home Shirt</h4>
    <div className='price' style={{display:"flex", justifyContent:'space-between'}}>
        <div className='price-column' style={{display:"flex", justifyContent:"space-between"}}>
            <div>30</div>
            <div>85</div>
            <div>Save</div>
        </div>
        <div>Add to favorites</div>
    </div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure error et aliquam, officia, 
        nihil rem sapiente laboriosam expedita dolorem obcaecati consectetur deleniti deserunt ea dolorum 
        numquam, vel ex molestias dignissimos. <a href='www.'>Read more..</a>
        </div>
        <div className='form'>
            <div className='grid' >
                <div className='col-12 md:col-4 lg:col-4'>size</div>
                <div className='col-12 md:col-6 lg:col-6'>dropdown</div>
                <div className='col-12 md:col-2 lg:col-2'>chart</div>
            </div>
            <div className='grid' >
                <div className='col-12 md:col-4 lg:col-4'>name</div>
                <div className='col-12 md:col-8 lg:col-8'>input</div>
            </div>
            <div className='grid' >
                <div className='col-12 md:col-4 lg:col-4'>Number on shirt</div>
                <div className='col-12 md:col-8 lg:col-8'>input</div>
            </div>
            <div className='grid' >
                <div className='col-12 md:col-4 lg:col-4'>Patch</div>
                <div className='col-12 md:col-8 lg:col-8'>dropdown</div>
            </div>
            <div className='grid' >
                <div className='col-12 md:col-4 lg:col-4'>quantity</div>
                <div className='col-12 md:col-8 lg:col-2'>dropdown</div>
                <div className='col-12 md:col-8 lg:col-8'></div>
            </div>
            
            
        </div>
        <div>Add to cart button</div>
    </div>
</div>
    </div>
    </>
  )
}

export default Product