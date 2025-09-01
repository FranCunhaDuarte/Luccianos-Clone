import './Header.css'
import Logo from '../../inconComponents/Logo.jsx'
import Langs from '../../components/Languages/Langs.jsx'
import MenuButton from '../../components/MenuButtonToggle/MenuButtonToggle.jsx'
import { useEffect, useState } from 'react'

const Header = ({ menuOpen, toggleMenu }) => {

    const [show,setShow] = useState(true);
    const [atTop,setAtTop] = useState(true);
    const [lastScroll,setLastScroll] = useState(0);

    useEffect(()=>{
        const handleScroll = () =>{
            const currentScroll = window.scrollY

            if(currentScroll >= 0 && currentScroll <= 30) {
                setAtTop(true)
                setShow(true)
                
            } else{
                setAtTop(false)
                if(currentScroll > lastScroll){
                    setShow(false)
                } else{
                    setShow(true)
                }
            }
            setLastScroll(currentScroll)
        };

        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    },[lastScroll])

    return (
        <>

            <header className={`header-container ${show ? 'show':'hide'} ${atTop ? 'top':'scrolled'}`}>
                <div className='header-items'>
                    <a href="" className='header-logo'><Logo color={'#000000'} /></a>
                    <span className='tag'>#ILMAESTRODELGELATO</span>
                    <div className='buttons-header'>
                        <Langs isOpen={menuOpen} />
                        <MenuButton isOpen={menuOpen} onToggle={toggleMenu}/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header