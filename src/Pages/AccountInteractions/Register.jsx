import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../../Authentication/AuthProvider'

export const Register = () => {

    let {signUp} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()

        let email = event.target.email.value
        let password = event.target.pass.value
        signUp(email, password)
        console.log(email, password)
    }

    return (
        <div className="hero bg-compass-sand min-h-screen flex justify-center ">
            <div className="hero-content flex-col gap-5">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">SignUp now</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                    <div className="card-body">
                        <form className='space-y-1.5' onSubmit={handleSubmit} >
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='pass' required />
                            <button type='submit' className="btn btn-neutral mt-4 w-full text-center">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
