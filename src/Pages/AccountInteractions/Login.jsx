import React from 'react'

export const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        let email = event.target.email.value 
        let password = event.target.pass.value 
        console.log(email,password)
    }
    return (
        <div className="hero bg-compass-sand min-h-screen ">
            <div className="hero-content flex-col gap-5">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now</h1>
 
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className='space-y-1.5' >
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email"   name='email'   required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='pass' required/>
                            <div className='text-end text-compass-forest'><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' onSubmit={handleSubmit} className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
