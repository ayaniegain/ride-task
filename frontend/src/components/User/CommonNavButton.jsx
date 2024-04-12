import React from 'react'
import { NavLink } from 'react-router-dom'

function CommonNavButton({linkText,pageName,btnText}) {
  return (
    <section className="allUser-nav">
    <div className="nav-head">
      <span>Customer ➡️</span>
      <h4>{pageName}</h4>
    </div>
    <div className="nav-btn">
      <button >
        <NavLink className="btn" to={`${linkText}`}>{btnText}</NavLink>
      </button>
    </div>
  </section>
  )
}

export default CommonNavButton