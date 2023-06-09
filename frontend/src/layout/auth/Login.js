import React from 'react'
import './Login.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login__container">
            <div className="login__form__container">
                <p>Feedback</p>
                <article>Add your products and give us your valuable feedback</article>
                <form action="" className='login__form'>
                    <div className="input__container">
                        <MdOutlineEmail/>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="input__container">
                        <RiLockPasswordFill/>
                        <input type="text" placeholder='Password' />
                    </div>
                    <p>Don't have an account ? <Link to='/signup' >Signup</Link></p>
                    <button>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login