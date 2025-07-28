import React from 'react'
import { useState } from 'react'
import './Langs.css'

const Langs = ({isOpen}) => {
    const [open,setOpen] = useState(false)
    
    const toggleLangMenu = (e) =>{
        if(!open){
            e.preventDefault();
            setOpen(true)
        }
    }

    const closeLangMenu = () => setOpen(false);

    return (
        <>
            <div className={`lang-section ${isOpen ? 'sidemenu-open' : ''}`} onMouseLeave={closeLangMenu}>
                <ul className={`options-lang ${open ? 'active':''}`}>
                    <li className='lang-box'><a href="" className='lang'>ES</a></li>
                    <li className='lang-box'><a href="" className='lang'>IT</a></li>
                    <li className='lang-box'><a href="" className='lang'>JA</a></li>
                    <li className='lang-box'><a href="" className='lang'>CH</a></li>
                </ul>
                <a href='' className='selected-lang' onClick={toggleLangMenu}>EN</a>
            </div>
        </>
    )
}

export default Langs