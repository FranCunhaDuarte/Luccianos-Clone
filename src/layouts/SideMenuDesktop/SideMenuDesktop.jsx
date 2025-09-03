import React, {useState} from 'react'
import './SideMenuDesktop.css'
import SideMenuThreeColums from '../../components/SideMenuThreeColums/SideMenuThreeColums'
import SideMenuOneColum from '../../components/SideMenuOneColum/SideMenuOneColum'
import SVGInstagram from '../../inconComponents/Instagram'
import SVGFacebook from '../../inconComponents/Facebook'
import SVGTikTok from '../../inconComponents/TikTok'

const SideMenuDesktop = ({ menuOpen }) => {

    const icepops = [[
        "icepops/imgi_84_file-1640787008946",
        "icepops/imgi_104_file-1668688498422",
        "icepops/imgi_103_file-1613162557334",
        "icepops/imgi_77_file-1605797845032",
        "icepops/imgi_78_file-1605797897247",
    ],
    [
        "icepops/imgi_79_file-1640787454037",
        "icepops/imgi_80_file-1604353935248",
        "icepops/imgi_81_file-1604353829986",
        "icepops/imgi_82_file-1604356660438",
        "icepops/imgi_83_file-1640786218937",
    ],
    [
        "icepops/imgi_85_file-1661782732311",
        "icepops/imgi_86_file-1638546793148",
        "icepops/imgi_72_file-1603919700456",
        "icepops/imgi_75_file-1605797538930",
        "icepops/imgi_76_file-1604351795340",
    ]]

    const gelatos = [[
        "gelatos/imgi_59_file-1608320456151",
        "gelatos/imgi_60_file-1605795746859",
        "gelatos/imgi_61_file-1608320787259",
        "gelatos/imgi_62_file-1610721356116",
        "gelatos/imgi_63_file-1605793992679",
    ],
    [
        "gelatos/imgi_64_file-1608321231109",
        "gelatos/imgi_65_file-1605795729875",
        "gelatos/imgi_66_file-1608320901889",
        "gelatos/imgi_14_Kinder-bueno-blanco",
        "gelatos/imgi_68_file-1605795856950",
    ],
    [
        "gelatos/imgi_69_file-1605796255511",
        "gelatos/imgi_70_file-1605796999756",
        "gelatos/imgi_57_file-1605796132277",
        "gelatos/imgi_58_file-1605796102869",
    ]]

    const alfajores = [
        [
            "alfajores/imgi_35_caja-5-6",
            "alfajores/imgi_34_caja-4-6",
            "alfajores/imgi_33_caja-3-6",
            "alfajores/imgi_32_caja-2-6",
            "alfajores/imgi_31_caja-1-6",
        ],
        [
            "alfajores/imgi_36_alfajor-1",
            "alfajores/imgi_37_alfajor-2",
            "alfajores/imgi_38_alfajor-3",
            "alfajores/imgi_39_alfajor-4",
        ],
        [
            "alfajores/imgi_40_caja-1-10",
            "alfajores/imgi_41_caja-2-10",
            "alfajores/imgi_42_caja-3-10",
            "alfajores/imgi_43_caja-4-10",
            "alfajores/imgi_44_caja-5-10",
        ],
    ]

    const chocolates = [
        [
            "chocolates/imgi_21_chocolate_fruto_del_bosque",
            "chocolates/imgi_22_chocolate_con_leche",
            "chocolates/imgi_23_chocolate_pistacchio_caramelizado",
            "chocolates/imgi_24_chocolate_con_leche_sin_azucar_agregada",
            "chocolates/imgi_25_chocolate_54_con_avellanas",
            "chocolates/imgi_26_chocolate_blanco",
            "chocolates/imgi_27_chocolate_con_leche_con_avellanas",
            "chocolates/imgi_28_chocolate_dark_70",
            "chocolates/imgi_29_chocolate_con_leche_con_DDL",
            "chocolates/imgi_30_chocolate_blanco_sin_azucar_agregada",
        ],
        [
            "chocolates/imgi_30_chocolate_blanco_sin_azucar_agregada",
            "chocolates/imgi_29_chocolate_con_leche_con_DDL",
            "chocolates/imgi_28_chocolate_dark_70",
            "chocolates/imgi_27_chocolate_con_leche_con_avellanas",
            "chocolates/imgi_26_chocolate_blanco",
            "chocolates/imgi_25_chocolate_54_con_avellanas",
            "chocolates/imgi_24_chocolate_con_leche_sin_azucar_agregada",
            "chocolates/imgi_23_chocolate_pistacchio_caramelizado",
            "chocolates/imgi_22_chocolate_con_leche",
            "chocolates/imgi_21_chocolate_fruto_del_bosque",
        ],
        [
            "chocolates/imgi_21_chocolate_fruto_del_bosque",
            "chocolates/imgi_22_chocolate_con_leche",
            "chocolates/imgi_23_chocolate_pistacchio_caramelizado",
            "chocolates/imgi_24_chocolate_con_leche_sin_azucar_agregada",
            "chocolates/imgi_25_chocolate_54_con_avellanas",
            "chocolates/imgi_26_chocolate_blanco",
            "chocolates/imgi_27_chocolate_con_leche_con_avellanas",
            "chocolates/imgi_28_chocolate_dark_70",
            "chocolates/imgi_29_chocolate_con_leche_con_DDL",
            "chocolates/imgi_30_chocolate_blanco_sin_azucar_agregada",
        ],
    ]

    const [activeSection, setActiveSection] = useState(null)

    const startYear = 2011;
    const currentYear = new Date().getFullYear();
    
    const years = Array.from(
        {length: currentYear - startYear + 1},
        (_,i) => startYear + i
    );

    return (
    <>
        <div className={`sidemenu-container ${menuOpen ? 'is-visible' : ''}`}>
            <div className='sidemenu-box'>
                <div className="navbar-wrapper">
                    <div className='navbar-box'>
                        <nav className='navbar'>
                            <ul>
                                <a className={activeSection == 'history' ? 'active':''} onMouseEnter={() => setActiveSection('history')} href=""><span>HISTORY</span></a>
                                <a className={activeSection == 'icepops' ? 'active':''} onMouseEnter={() => setActiveSection('icepops')} href=""><span>ICEPOPS</span></a>
                                <a className={activeSection == 'gelatos' ? 'active':''} onMouseEnter={() => setActiveSection('gelatos')} href=""><span>GELATO</span></a>
                                <a className={activeSection == 'alfajores' ? 'active':''} onMouseEnter={() => setActiveSection('alfajores')} href=""><span>ALFAJORES</span></a>
                                <a className={activeSection == 'chocolates' ? 'active':''} onMouseEnter={() => setActiveSection('chocolates')} href=""><span>CHOCOLATES</span></a>
                                <a className={activeSection == 'contact' ? 'active':''} onMouseEnter={() => setActiveSection('contact')} href=""><span>CONTACT</span></a>
                            </ul>
                        </nav>
                    </div>
                    <div className='menu-navbar-images'>
                        <div className='menu-images-wrapper'>
                            <SideMenuOneColum className={`${activeSection == 'history' ? 'active': ''}`} activeSection={activeSection} elements={years} timing={45} />
                            <SideMenuThreeColums className={`${activeSection == 'icepops' ? 'active': ''}`} activeSection={activeSection} elements={icepops} timing={25} />
                            <SideMenuThreeColums className={`${activeSection == 'gelatos' ? 'active': ''}`} activeSection={activeSection} elements={gelatos} timing={25} />
                            <SideMenuThreeColums className={`${activeSection == 'alfajores' ? 'active': ''}`} activeSection={activeSection} elements={alfajores} timing={25} />
                            <SideMenuThreeColums className={`${activeSection == 'chocolates' ? 'active': ''}`} activeSection={activeSection} elements={chocolates} timing={45} />
                        </div>
                    </div>
                    <div className='social-media-box'>
                        <ul className='social-media-container'>
                            <a href='' className='social'><SVGInstagram color='#222' /><span>@luccianos_</span></a>
                            <a href='' className='social'><SVGFacebook color='#222' /><span>/luccianos</span></a>
                            <a href='' className='social'><SVGTikTok color='#222' /><span>@luccianos_</span></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideMenuDesktop