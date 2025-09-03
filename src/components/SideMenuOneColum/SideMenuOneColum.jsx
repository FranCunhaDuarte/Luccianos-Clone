import React, { useEffect, useRef } from 'react'
import './SideMenuOneColum.css'
import gsap from 'gsap'

const SideMenuOneColum = ({elements, timing = 0, className=''}) => {

    const fisrtCol = useRef(null)
    
    
    useEffect(()=>{
        const animationInfiniteScroll = (col, direct = 'up') =>{

            const childHeight = col.children[0].offsetHeight

            gsap.fromTo(col,{
                y: direct=='up' ? 0 : -childHeight,
            },{
                y: direct=='up' ? -childHeight : 0,
                repeat: -1,
                duration: timing,
                ease: 'none'
            })
        }

        const handleLoad = () => {
            animationInfiniteScroll(fisrtCol.current, 'up');
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    },[])

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