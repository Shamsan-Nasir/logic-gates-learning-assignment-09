import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../../Authentication/AuthProvider'
import { FaAngleLeft } from 'react-icons/fa6'

export const UpdateProfile = () => {

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
                <div className="card bg-base-100 w-full  shrink-0 shadow-lg border border-compass-forest pt-8 pb-4 px-4 rounded-t-none">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-compass-forest">Enter Your Updated Information</h1>

                    </div>
                    <br />
                    <div className="card-body p-0">
                        <form className='space-y-2 flex flex-col' onSubmit={handleLogin}>
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" name='pass' required />
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" name='pass' required />
 
                            <button type='submit' className="btn btn-neutral mt-4 w-full text-center bg-compass-forest">Login</button>
 
    
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
