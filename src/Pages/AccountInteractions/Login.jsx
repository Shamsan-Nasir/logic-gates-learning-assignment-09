import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../../Authentication/AuthProvider'

export const Login = () => {


    const {signUp,signIn} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        let email = event.target.email.value
        let password = event.target.pass.value
        signUp(email,password)
        console.log(email, password)
    }
    const handleLogin = (event) => {
        event.preventDefault()

        let email = event.target.email.value
        let password = event.target.pass.value
        signIn(email,password)
        console.log(email, password)
    }
    return (
        <div className="hero bg-compass-sand min-h-screen flex ">
            <div className="hero-content flex-col gap-5">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">SignUp now</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className='space-y-1.5' onSubmit={handleSubmit} >
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='pass' required />
                            <div className='text-end text-compass-forest'><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hero-content flex-col gap-5">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className='space-y-1.5' onSubmit={handleLogin}>
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='pass' required />
                            <div className='text-end text-compass-forest'><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
