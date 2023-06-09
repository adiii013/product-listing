import React from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const login = useSelector((state) => state.user.login)
  const navigate = useNavigate();

  const loginUser = ()=>{
    console.log("dvfs");
    navigate('/login/');
  }

  const signUpUser = ()=>{
    navigate('/signup')
  }

  return (
    <div className="header__container">
      <p>Feedback</p>
      <div className="header__subcontainer">
        {
          (login) ? <><p>Logout</p>
            <p>Hello</p>
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" className='header__subcontainer__logo' alt="" /></> :<> <div onClick={loginUser}> <p> Login</p></div><div onClick={signUpUser}> <p> Signup</p></div></>
        }
      </div>
    </div>
  )
}

export default Header