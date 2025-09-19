import React, { useEffect, useRef } from 'react'
import './ProductSlider.css'
import SVGArrow from '../../inconComponents/Arrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const ProductSlider = ({ products = [] , direct = 'right'}) => {
  const swiperRef = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!swiperRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        const maxTranslate = swiperRef.current.maxTranslate(); // negativo
        let translate = (direct == 'right' ? progress : -progress) * maxTranslate;

        // 🔄 Loop manual
        const totalWidth = Math.abs(maxTranslate);
        translate = ((translate % totalWidth) + totalWidth) % totalWidth;
        translate = -translate;

        swiperRef.current.setTranslate(translate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className='product-slider' ref={containerRef}>
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
          loop={false} // ⚠️ no usar loop porque rompe setTranslate
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
