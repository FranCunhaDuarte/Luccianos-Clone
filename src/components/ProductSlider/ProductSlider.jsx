import React, { useRef } from 'react'
import './ProductSlider.css'
import SVGArrow from '../../inconComponents/Arrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const ProductSlider = ({ products = [] }) => {
  const swiperRef = useRef(null);
  const intervalRef = useRef(null);

  const startSliding = (direction) => {
    if (!swiperRef.current) return;

    if (direction === "next") {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }

    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (swiperRef.current) {
        if (direction === "next") {
          swiperRef.current.slideNext();
        } else {
          swiperRef.current.slidePrev();
        }
      }
    }, 900);
  };

  const stopSliding = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <div className='product-slider'>
        <div className='slide-buttons-box'>
          <div className='slide-buttons-wrapper'>
            <div
              className="swiper-button swiper-button-prev"
              onMouseEnter={() => startSliding("prev")}
              onMouseLeave={stopSliding}
            >
              <SVGArrow direction={'left'} />
            </div>
            <div
              className="swiper-button swiper-button-next"
              onMouseEnter={() => startSliding("next")}
              onMouseLeave={stopSliding}
            >
              <SVGArrow />
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          freeMode={true}
          modules={[FreeMode]}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className='flavors-swapper'
        >
          {products.map((product) => (
            <SwiperSlide className='product' key={product.id}>
              <a href="">
                <div className='product-image'>
                  <img src={`/media/images/products/${product.url}.webp`} alt={`${product.name}`} />
                  <img src='/media/images/products/icepops/imgi_89_bite.webp' alt="bite" className='bite-image' />
                </div>
                <div className='product-details' style={{ backgroundColor: product.color }}>
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
