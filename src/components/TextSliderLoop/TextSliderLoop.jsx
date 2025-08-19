import React from 'react'
import './TextSliderLoop.css'

const TextSliderLoop = () => {
  return (
    <>
      <div className='text-slider-wrapper'>
        <ul className='items'>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
        </ul>
        <ul className='items' aria-hidden={true}>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
          <li className='news-bold'>NEWS!</li>
          <li className='news-italics'>NEWS!</li>
        </ul>
      </div>
    </>
  )
}

export default TextSliderLoop