import React from 'react'
import './Login.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillPersonFill,BsPhone} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <div className="login__container">
            <div className="login__form__container">
                <p>Feedback</p>
                <article>Add your products and give us your valuable feedback</article>
                <form action="" className='login__form'>
                <div className="input__container">
                        <BsFillPersonFill/>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="input__container">
                        <MdOutlineEmail/>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="input__container">
                        <BsPhone/>
                        <input type="text" placeholder='Phone no' />
                    </div>
                    <div className="input__container">
                        <RiLockPasswordFill/>
                        <input type="text" placeholder='Password' />
                    </div>
                    <p>Already have an account ? <Link to='/login' >Login</Link></p>
                    <button>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup