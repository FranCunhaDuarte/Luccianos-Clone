import React from 'react'
import './SideMenuDesktop.css'

const SideMenuDesktop = ({ menuOpen }) => {


    // const icepops = [
    //     "imgi_105_file-1672316918746",
    //     "imgi_104_file-1668688498422",
    //     "imgi_103_file-1613162557334",
    //     "imgi_77_file-1605797845032",
    //     "imgi_78_file-1605797897247",
    //     "imgi_79_file-1640787454037",
    //     "imgi_80_file-1604353935248",
    //     "imgi_81_file-1604353829986",
    //     "imgi_82_file-1604356660438",
    //     "imgi_83_file-1640786218937",
    //     "imgi_84_file-1640787008946",
    //     "imgi_85_file-1661782732311",
    //     "imgi_86_file-1638546793148",
    //     "imgi_72_file-1603919700456",
    //     "imgi_75_file-1605797538930",
    //     "imgi_76_file-1604351795340",
    // ]

    // const numColums = 3

    // const chunkArray = (icepops ,numColums) => {
    //     const perColumn = icepops.length / numColums
    //     return Array.from({length: numColums},(_,i) => )
    // }

    const navigationSections = document.querySelectorAll('.navbar ul a')

    navigationSections.forEach(item => {
        item.addEventListener('mouseenter',() =>{
            navigationSections.forEach(el => {el.classList.remove('active')})
            item.classList.add('active')
        })
    })

    const startYear = 2011;
    const currentYear = new Date().getFullYear();
    console.log(currentYear)

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
                                <a href=""><span>HISTORY</span></a>
                                <a href=""><span>ICEPOPS</span></a>
                                <a href=""><span>GELATO</span></a>
                                <a href=""><span>ALFAJORES</span></a>
                                <a href=""><span>CHOCOLATES</span></a>
                                <a href=""><span>SHOPS</span></a>
                                <a href=""><span>LUCCIANO'S CENTRAL</span></a>
                                <a href=""><span>PARTY SERVICE</span></a>
                                <a href=""><span>FRACHISES</span></a>
                                <a href=""><span>CONTACT</span></a>
                                <a href=""><span>STORE</span></a>
                                <a href=""><span>NEWS</span></a>
                            </ul>
                        </nav>
                    </div>
                    <div className='menu-navbar-images'>
                        <div className='menu-images-wrapper'>
                            <div className='container-data-section hide'>
                                <div className='single-column'>
                                    {years.map((year) => (
                                        <span className='year' key={year}>{year}</span>
                                    ))}
                                </div>
                            </div>
                            <div className='container-data-section three-colums'>
                                <div className='column'></div>
                                <div className='column'></div>
                                <div className='column'></div>
                            </div>
                            <div className='container-data-section'>

                            </div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                            <div className='container-data-section'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideMenuDesktop