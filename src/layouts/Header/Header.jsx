import './Header.css'
import Logo from '../../inconComponents/Logo.jsx'
import Langs from '../../components/Languages/Langs.jsx'
import MenuButton from '../../components/MenuButtonToggle/MenuButtonToggle.jsx'

const Header = ({ menuOpen, toggleMenu }) => {



    return (
        <>
            <div className='header-container'>
                <div className='header-items'>
                    <a href="" className='header-logo'><Logo color={'#000000'} /></a>
                    <div className='buttons-header'>
                        <Langs isOpen={menuOpen} />
                        <MenuButton isOpen={menuOpen} onToggle={toggleMenu}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header