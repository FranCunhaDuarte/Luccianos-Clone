import React from 'react'
import SVGArrow from '../../inconComponents/Arrow';
import './PhotosSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';

const PhotosSlider = () => {

    const photos = [
        {id: 1, url: '/media/images/carousel-shops/imgi_100_new-carrousel-6'},
        {id: 2, url: '/media/images/carousel-shops/imgi_101_new-carrousel-1'},
        {id: 3, url: '/media/images/carousel-shops/imgi_102_new-carrousel-2'},
        {id: 4, url: '/media/images/carousel-shops/imgi_103_new-carrousel-3'},
        {id: 5, url: '/media/images/carousel-shops/imgi_104_new-carrousel-4'},
        {id: 6, url: '/media/images/carousel-shops/imgi_105_new-carrousel-5'},
    ]


  return (
    <>
        <div className='photos-slider-card'>
            <div  className='swiper-container'>
                <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                modules={[Navigation, Autoplay]}
                loop={true}
                navigation={{
                nextEl: ".images-button-next",
                }}
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false,
                }}
                className='photos-swipper'>
                    {photos.map((photo) => (
                        <SwiperSlide key={photo.id}>
                            <img src={`${photo.url}.jpg`} alt="shop" className='photo' />
                        </SwiperSlide>

                    ))}
                </Swiper>
                <div className='images-button-next'><SVGArrow /></div>
            </div>
            <div className='photos-items-slider'>
                <div className='ball'></div>
                <div className='index-slider'>
                    <div className='indexs'><span className='number'>1</span><span className='splitter'></span><span className='number'>6</span></div>
                    <div className='deco'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PhotosSlider