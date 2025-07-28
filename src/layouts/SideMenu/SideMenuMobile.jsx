import React from 'react'
import SVGInstagram from '../../inconComponents/Instagram'
import SVGFacebook from '../../inconComponents/Facebook'
import SVGTikTok from '../../inconComponents/TikTok'
import './SideMenuMobile.css'

const SideMenu = ({ menuOpen }) => {

  


  return (
    <>
        <div className={`sidemenu-container ${menuOpen ? 'is-visible' : ''}`}>
            <div className='sidemenu-box'>
              <div className='sidemenu-items'>
                <nav className='navbar'>
                  <ul className='list-sections'>
                    <li className='section'><a href="">HISTORY</a></li>
                    <li className='section'><a href="">ICEPOPS</a></li>
                    <li className='section'><a href="">GELATO</a></li>
                    <li className='section'><a href="">ALFAJORES</a></li>
                    <li className='section'><a href="">CHOCOLATES</a></li>
                    <li className='section'><a href="">SHOPS</a></li>
                    <li className='section'><a href="">LUCCIANO'S CENTRAL</a></li>
                    <li className='section'><a href="">PARTY SERVICE</a></li>
                    <li className='section'><a href="">FRANCHISES</a></li>
                    <li className='section'><a href="">CONTACT</a></li>
                    <li className='section'><a href="">STORE</a></li>
                    <li className='section'><a href="">NEWS</a></li>
                  </ul>
                </nav>
                <ul className='social-media-container'>
                  <li className='social'><SVGInstagram /><span>@luccianos_</span></li>
                  <li className='social'><SVGFacebook /><span>/luccianos</span></li>
                  <li className='social'><SVGTikTok /><span>@luccianos_</span></li>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default SideMenu