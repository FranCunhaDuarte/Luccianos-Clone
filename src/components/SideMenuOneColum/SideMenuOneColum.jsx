import React, { useEffect, useRef } from 'react'
import './SideMenuOneColum.css'
import gsap from 'gsap'

const SideMenuOneColum = ({elements, timing = 0, className=''}) => {

    const fisrtCol = useRef(null)

    const timelineRef = useRef([])
    
    
    useEffect(()=>{
        const animationInfiniteScroll = (col, direct = 'up') =>{

            const childHeight = col.children[0].offsetHeight

            const timeline = gsap.timeline({
              repeat: -1,
              defaults: {duration: timing, ease: 'none'}
            })

            timeline.fromTo(col,
              { y: direct=='up' ? 0 : -childHeight },
              { y: direct=='up' ? -childHeight : 0 }
            )

            return timeline.pause()
        }

        const handleLoad = () => {
          timelineRef.current = [animationInfiniteScroll(fisrtCol.current, 'up')]
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    },[timing])

    useEffect(()=> {
      if(timelineRef.current.length === 0) return;

      if(className == 'active'){
        timelineRef.current.forEach((ele) => {ele.play()})
      } else{
        timelineRef.current.forEach((ele) => {ele.pause()})
      }

    },[className])

  return (
    <>
        <div className={`container-data-section single-column ${className}`} ref={fisrtCol}>
          <div className='colum'>
            {elements.map((year) => (
                <span className='year' key={year}>{year}</span>
            ))}
          </div>
          <div className='colum'>
            {elements.map((year) => (
                <span className='year' key={year}>{year}</span>
            ))}
          </div>
        </div>
    </>
  )
}

export default SideMenuOneColum