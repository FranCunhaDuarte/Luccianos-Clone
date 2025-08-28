import React from 'react'
import './ButtonHover.css'

const ButtonHover = ({text, color=''}) => {
  return (
    <>
        <a href="" className={`button ${color}`}>
            <span>{text}</span>
            <span>{text}</span>
        </a>
    </>
  )
}

export default ButtonHover