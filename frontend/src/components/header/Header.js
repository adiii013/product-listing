import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header__container">
      <p>Feedback</p>
      <div className="header__subcontainer">
          <p>Logout</p>
          <p>Hello</p>
          <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" className='header__subcontainer__logo' alt="" />
      </div>
    </div>
  )
}

export default Header