import React from 'react'
import './Partners.css'

const Partners = () => {
  return (
    <>
        <div className="partners">
            <div className='partners-wrapper'>
                <div className='title'>
                    <span>OUR PARTNERS</span>
                </div>
                <div className='partners-items'>
                    <img src="/media/images/partners/imgi_87_jameson.svg" alt="jameson" />
                    <img src="/media/images/partners/imgi_88_mivillano.svg" alt="minions" />
                    <img src="/media/images/partners/imgi_89_netflix.svg" alt="netflix" />
                    <img src="/media/images/partners/imgi_90_universal.svg" alt="universal" />
                    <img src="/media/images/partners/imgi_91_pedidos-ya.svg" alt="pedidos-ya" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Partners