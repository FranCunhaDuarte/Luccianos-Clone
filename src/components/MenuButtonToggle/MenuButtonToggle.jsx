
import {React} from 'react'
import './MenuButtonToggle.css'

const MenuButtonToggle = ({ isOpen, onToggle }) => {

    return (
        <>
            <div className={`toggle-navbar ${isOpen ? 'open' : ''}`} onClick={onToggle}>
                <div className='menu-button'>
                    <span className='line line-1'></span>
                    <span className='line line-2'></span>
                    <span className='line line-3'></span>
                </div>
            </div>
        </>
    )
}

export default MenuButtonToggle