import React from 'react'
import  './News.css'
import SwiperNews from '../SwiperNews/SwiperNews'
import TextSliderLoop from '../TextSliderLoop/TextSliderLoop'

const News = () => {
  return (
    <>
        <div className='news'>
            <div className='news-container'>
                <div className='text-slider-box'>
                    <TextSliderLoop />
                </div>
                <div className='news-box'>
                    <div className='news-wrapper'>
                        <SwiperNews />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default News