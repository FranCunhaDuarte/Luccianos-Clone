import React from 'react'
import SVGLogo from '../../inconComponents/Logo'
import SVGFacebook from '../../inconComponents/Facebook'
import SVGInstagram from '../../inconComponents/Instagram'
import SVGTikTok from '../../inconComponents/TikTok'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='top'>
                <div className='top-wrapper'>
                    <div className='line'></div>
                    <div className='logo'>
                        <SVGLogo />
                    </div>
                    <div className='deco'>
                        <div className='line'></div>
                        <div className='ball'></div>
                        <div className='line'></div>
                    </div>
                    <div className='navigation'>
                        <div className='left'>
                            <div className='column'>
                                <nav className='navbar'>
                                    <ul>
                                        <li><a href="">History</a></li>
                                        <li><a href="">IcePops</a></li>
                                        <li><a href="">Gelato</a></li>
                                        <li><a href="">Alfajores</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='column'>
                                <nav className='navbar'>
                                    <ul>
                                        <li><a href="">Shops</a></li>
                                        <li><a href="">Inspiration Lab</a></li>
                                        <li><a href="">Franchises</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='column'>
                                <nav className='navbar'>
                                    <ul>
                                        <li><a href="">Contact</a></li>
                                        <li><a href="">Store</a></li>
                                        <li><a href="">News</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='right'>
                            <a href="" className='items'>
                                <span className='subtext'>LEARN MORE ABOUT OUR PRODUCTS</span>
                                <span className='title'>ICEPOPS</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='bottom-wrapper'>
                    <form action="" className='form-newsletter'>
                        <span className='subtext'>SUSCRIBE TO OUR NEWSLETTER</span>
                        <div className='field'>
                            <label>NAME</label>
                            <input type="text" required/>
                        </div>
                        <div className='field'>
                            <label>EMAIL</label>
                            <input type="text" required/>
                        </div>
                        <button type='submit'>
                            <div className='button-box'>
                                <a href="" className='button'>CHECK OUT OUR SHOPS</a>
                            </div>
                        </button>
                    </form>
                    <div className='social-media'>
                        <a href='' className='item'><SVGTikTok color='#fff' /><span>@luccianos_</span></a>
                        <a href='' className='item'><SVGInstagram color='#fff' /><span>@luccianos_</span></a>
                        <a href='' className='item'><SVGFacebook color='#fff' /><span>/luccianos</span></a>
                    </div>
                    <span className='developed-by'>Developed by <a href="">Franco Cunha</a></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer