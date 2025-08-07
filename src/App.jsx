import React, {useEffect, useState} from 'react'
import Header from './layouts/Header/Header.jsx'
import Main from './pages/Home.jsx'
import SideMenuMobile from './layouts/SideMenu/SideMenuMobile.jsx'
import Lenis from 'lenis'

const App = () => {



  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      lerp: 0.08
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
        <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <SideMenuMobile menuOpen={menuOpen} />
        <Main />
        
    </>
  )
}

export default App