import React from 'react'
import './SideMenu.css'
import SideMenuMobile from '../SideMenuMobile/SideMenuMobile'
import SideMenuDesktop from '../SideMenuDesktop/SideMenuDesktop'

const SideMenu = ({ menuOpen }) => {

  
  if(window.innerWidth >= 1000){
    return <>
      <SideMenuDesktop menuOpen={menuOpen} />
    </>
  }

  return (
    <>
        <SideMenuMobile menuOpen={menuOpen} />
    </>
  )
}

export default SideMenu