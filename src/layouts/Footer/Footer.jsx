import React from 'react'
import SVGLogo from '../../inconComponents/Logo'
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
                                        <li><a href=""></a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='column'>
                                <nav className='navbar'>
                                    <ul>
                                        <li><a href=""></a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='column'>
                                <nav className='navbar'>
                                    <ul>
                                        <li><a href=""></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='right'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'></div>
        </div>
    </>
  )
}

export default Footer