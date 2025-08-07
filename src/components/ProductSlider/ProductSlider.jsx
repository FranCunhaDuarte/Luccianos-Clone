import React from 'react'
import './ProductSlider.css'
import SVGArrow from '../../inconComponents/Arrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useRef } from 'react';

const ProductSlider = ({products=[]}) => {

  const prevRef=useRef(null)
  const nextRef=useRef(null)
  

  return (
    <>
        <div className='product-slider'>
            <div className='slide-buttons-box'>
              <div className='slide-buttons-wrapper'>
                <div className="swiper-button swiper-button-prev" ref={prevRef}>
                  <SVGArrow />
                </div>
                <div className="swiper-button swiper-button-next" ref={nextRef}>
                  <SVGArrow />
                </div>
              </div>
            </div>
            <Swiper 
            spaceBetween={0}
            slidesPerView="auto"
            freeMode={true}
            modules={[FreeMode,Navigation]}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            onBeforeInit={(swiper)=>{
              swiper.params.navigation.nextEl = nextRef.current,
              swiper.params.navigation.prevEl = prevRef.current
            }}
            className='flavors-swapper'>  
                {products.map((product) => (
                  <SwiperSlide className='product' key={product.id} >
                    <a href="">
                      <div className='product-image'>
                        <img src={`/media/images/products/${product.url}.webp`} alt={`${product.name}`} />
                      </div>
                      <div className='product-details' style={ {backgroundColor: product.color} }>
                        <div className='details-box'>  
                          <strong className='title'>{product.name}</strong>
                          <p className='description'>{product.description}</p>
                          <div className='plus'>
                            <div className='line-1'></div>
                            <div className='line-2'></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  )
}

export default ProductSlider