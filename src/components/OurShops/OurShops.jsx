import React from 'react'
import PhotosSlider from '../PhotosSlider/PhotosSlider.jsx'
import './OurShops.css'
import ButtonHover from '../ButtonHover/ButtonHover.jsx'

const OurStores = () => {
  return (
    <>
        <section className='our-store'>
            <div className='our-store-wrapper'>
                <div className='announce'>
                    <h2 className='title'>
                        <span className='text'>OUR STORES</span>
                    </h2>
                    <div className='deco'>
                        <div className='ball'></div>
                        <div className='line'></div>
                    </div>
                    <div className='subtext-box'><p className='subtext'>Check out which <br /> is the nearest shop</p></div>
                </div>
                <div className='store-image-container'>
                    <picture>
                        <img src="/media/images/imgi_99_new-store.jpg" alt="lucciano's store" />
                    </picture>
                </div>
                <div className='photos-slider-container'>
                    <PhotosSlider />
                </div>
                <div className='button-wrapper'>
                    <ButtonHover text={'CHECK OUT OUR SHOPS'} />
                    <div className='line'></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurStores