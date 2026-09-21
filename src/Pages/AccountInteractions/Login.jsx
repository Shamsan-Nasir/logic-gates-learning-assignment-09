import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from '../../Authentication/AuthProvider'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { FaAngleLeft } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

export const Login = () => {


    const { user, signIn, signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate()
    let location = useLocation()

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

    function handleGoogleSignIn() {
        signInWithGoogle().then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        location?.state ? navigate(`${location.state}`) : navigate('/')
 
 
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.customData.email;
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                    });
    }
 
    return (
        <div className="hero bg-compass-sand min-h-screen flex justify-center max-w-360 mx-auto  ">
            <div className="hero-content flex-col gap-0">
                <div className='w-full flex justify-start'><button onClick={() => navigate('/')} className='btn border bg-white border-compass-forest text-compass-forest hover:bg-compass-forest hover:text-white text-center w-full rounded-b-none'><FaAngleLeft></FaAngleLeft> Back to Home</button></div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg border border-compass-forest pt-8 pb-4 rounded-t-none">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-compass-forest">Welcome</h1>
                        <p className='text-compass-forest'>Log-In to Continue</p>

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
                            <div className='w-full text-center'>or</div>
                            <button onClick={() => handleGoogleSignIn() }className="btn bg-white text-black border-2 border-[#e5e5e5] w-full text-center">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <div className={'mt-4 text-center'}>Don't have an account? <NavLink to='/register'><span className='hover:text-blue-600'> Register</span></NavLink></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
