import * as React from 'react'
import './Arrow.css'

export default function SVGArrow({direction}) {
  return <div className={`arrow-slider ${direction}`}><div></div><div></div></div>
}