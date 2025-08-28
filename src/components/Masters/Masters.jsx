import React, { useEffect } from 'react'
import './Masters.css'
import Logo from '../../inconComponents/Logo.jsx'
import ButtonHover from '../ButtonHover/ButtonHover.jsx'

const Masters = () => {

  useEffect((() => {
    const images = document.querySelectorAll('.carrousel');
    let index = 0;

    const activeNext = () =>{
      images.forEach(img => img.classList.remove('active'))
      images[index].classList.add('active')
      index=(index+1)%images.length
    }

    activeNext();

    const interval=setInterval(activeNext,5000)

    return () => clearInterval(interval)
  }),[])


  return (
    <>
        <section className='masters'>
          <div className='wrapper'>
            <h2 className='title'>#IL MAESTRO <br/>DEL GELATO</h2>
            <div className='logo-lucciano'><Logo  /></div>
            <div className='images-wrapper'>
              <img className='reference carrousel' src="/media/images/imgi_52_master-1.webp" alt="master-img" />
              <div className='images'>
                <img className='carrousel' src="/media/images/imgi_53_master-2.webp" alt="master-img" />
                <img className='carrousel' src="/media/images/imgi_54_master-3.webp" alt="master-img" />
                <img className='carrousel' src="/media/images/imgi_55_master-4.webp" alt="master-img" />
                <img className='carrousel' src="/media/images/imgi_56_master-5.webp" alt="master-img" />
              </div>
            </div>
          </div>
          <div className='buttons-image'>
            <div className='wrapper'>
              <ButtonHover text={'DISCOVER LUCCIANO\'S CENTRAL'} color='white' />
            </div>
          </div>
        </section>
    </>
  )
}

export default Masters