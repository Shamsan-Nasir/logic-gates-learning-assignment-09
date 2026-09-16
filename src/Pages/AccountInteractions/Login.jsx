import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../../Authentication/AuthProvider'
import { NavLink, useNavigate } from 'react-router'
import { FaAngleLeft } from "react-icons/fa";

export const Login = () => {


    const { signUp, signIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault()

        let email = event.target.email.value
        let password = event.target.pass.value
        signIn(email, password).then((userCredential) => {
            navigate('/')

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }


    return (
        <div className="hero bg-compass-sand min-h-screen flex justify-center max-w-360 mx-auto  ">
            <div className="hero-content flex-col gap-6.5">
                 <div className='w-full flex justify-start'><button onClick={()=> navigate('/')} className='btn border bg-white border-compass-forest text-compass-forest hover:bg-compass-forest hover:text-white text-center w-full'><FaAngleLeft></FaAngleLeft> Back to Home</button></div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg border border-compass-forest py-8">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-compass-forest">Login now</h1>

                    </div>
                    <br />
                    <div className="card-body">
                        <form className='space-y-2' onSubmit={handleLogin}>
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='pass' required />
                            <div className='text-end text-compass-forest'><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4 w-full text-center bg-compass-forest">Login</button>
                            <div>Don't have an account? <NavLink to='/register'><span className='hover:text-blue-600'> Register</span></NavLink></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
