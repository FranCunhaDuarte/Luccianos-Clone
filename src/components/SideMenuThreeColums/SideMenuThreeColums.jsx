import React, { useEffect, useRef } from 'react'
import './SideMenuThreeColums.css'
import gsap from 'gsap'

const SideMenuThreeColums = ({elements, timing = 0, className=''}) => {

    const fisrtCol = useRef(null)
    const secondCol = useRef(null)
    const thirstCol = useRef(null)
    
    
    useEffect(()=>{
        const animationInfiniteScroll = (col, direct = 'up') =>{

            const childHeight = col.children[0].offsetHeight

            const timeLine = gsap.timeline()({
                repeat: -1,
                defaults: { duration: timing, ease: 'none' }
            })

            timeLine.fromTo(col,{
                y: direct=='up' ? 0 : -childHeight
            },{
                y: direct=='up' ? -childHeight : 0
            })
            
            return timeLine
        }

        const handleLoad = () => {
            animationInfiniteScroll(fisrtCol.current, 'up');
            animationInfiniteScroll(secondCol.current, 'down');
            animationInfiniteScroll(thirstCol.current, 'up');
        };

        

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    },[])


  return (
    <>
        <div className={`container-data-section three-colums ${className}`}>
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