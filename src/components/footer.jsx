import React from 'react'

function Footer() {
    return (
        <>
            <div className='footer' style={{margin:"0rem 3rem"}}>
                <div className="grid">
                    <div className="col-12 sm:col-12 md:col-3 lg:col-3">Main</div>
                    <div className="col-12 sm:col-12 md:col-3 lg:col-3">Sub</div>
                    <div className="col-12 sm:col-12 md:col-3 lg:col-3">Subscribe</div>
                    <div className="col-12 sm:col-12 md:col-3 lg:col-3">Follow</div>
                </div>
                <hr/>
                <div className="grid">
                    <div className="col-12 sm:col-12 md:col-3 lg:col-3">All Rights Reserved</div>
                    <div className="col-12 sm:col-12 md:col-3 lg:col-3">Socials</div>
                </div>
                
            </div>
        </>
    )
}

export default Footer