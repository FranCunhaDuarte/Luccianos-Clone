import React, { useEffect, useRef } from 'react'
import './SideMenuThreeColums.css'
import gsap from 'gsap'

const SideMenuThreeColums = ({elements, timing = 0, className=''}) => {

    const fisrtCol = useRef(null)
    const secondCol = useRef(null)
    const thirstCol = useRef(null)

    const timelineRef = useRef([])

    useEffect(()=>{
        const animationInfiniteScroll = (col, direct = 'up') =>{

            const childHeight = col.children[0].offsetHeight

            const timeline = gsap.timeline({
                repeat: -1,
                defaults: {ease: 'none', duration: timing}
            })

            timeline.fromTo(col,
                { y: direct=='up' ? 0 : -childHeight },
                { y: direct=='up' ? -childHeight : 0 }
            )

            return timeline.pause()
        }

        const handleLoad = () => {
            timelineRef.current = [
                animationInfiniteScroll(fisrtCol.current, 'up'),
                animationInfiniteScroll(secondCol.current, 'down'),
                animationInfiniteScroll(thirstCol.current, 'up'),
            ]
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };

    },[timing])

    useEffect(() => {
        if (timelineRef.current.length === 0) return;

        if(className == 'active'){
            timelineRef.current.forEach((ele) => {ele.play()})
        } else {
            timelineRef.current.forEach((ele) => {ele.pause()})
        }
    }, [className])


  return (
    <>
        <div className={`container-data-section three-colums ${className}`} >
            <div className='colum' ref={fisrtCol}>
                <div>
                    {elements[0].map((el, i) => (
                        <img key={i} src={`media/images/products/${el}.webp`} alt="" />
                    ))}
                </div>
                <div>
                    {elements[0].map((el, i) => (
                        <img key={i} src={`media/images/products/${el}.webp`} alt="" />
                    ))}
                </div>
            </div>
            <div className='colum' ref={secondCol}>
                <div>
                    {elements[1].map((el, i) => (
                        <img key={i} src={`media/images/products/${el}.webp`} alt="" />
                    ))}
                </div>
                <div>
                    {elements[1].map((el, i) => (
                        <img key={i} src={`media/images/products/${el}.webp`} alt="" />
                    ))}
                </div>
            </div>
            <div className='colum' ref={thirstCol}>
                <div>
                    {elements[2].map((el, i) => (
                        <img key={i} src={`media/images/products/${el}.webp`} alt="" />
                    ))}
                </div>
                <div>
                    {elements[2].map((el, i) => (
                        <img key={i} src={`media/images/products/${el}.webp`} alt="" />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default SideMenuThreeColums