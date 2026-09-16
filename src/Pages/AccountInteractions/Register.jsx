import React, { useContext, useState } from 'react'
import { AuthContext, AuthProvider } from '../../Authentication/AuthProvider'
import { useNavigate } from 'react-router'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const passwordLenRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;
const passwordDigRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{1,}$/;
const passwordLowRegex = /^(?=.*[a-z])[A-Za-z\d@$!%*?&]{1,}$/;
const passwordCapRegex = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{1,}$/;
const passwordCharRegex = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

const passwordAllAllowed = /^[A-Za-z\d@$!%*?&]{1,}$/;


export const Register = () => {
    let [error, setError] = useState([])
    let { signUp } = useContext(AuthContext)
    let [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()

        let email = event.target.email.value
        let password = event.target.pass.value

        let errors = []
        if (!passwordAllAllowed.test(password)) {
            errors.push('Password can not contain special characters other than @ $ ! % * ? & ')
            setError(errors)
            return
        }

        if (!passwordLenRegex.test(password)) {
            errors.push("Password must be at least 8 characters")
        }

        if (!passwordDigRegex.test(password)) {
            errors.push("Password must contain at least a single number")
        }

        if (!passwordLowRegex.test(password)) {
            errors.push("Password must contain at least one lowercase letter")
        }

        if (!passwordCapRegex.test(password)) {
            errors.push("Password must contain at least one uppercase letter")
        }

        if (!passwordCharRegex.test(password)) {
            errors.push("Password must contain at least one special character")
        }
        setError(errors)
        if (errors.length > 0) {
            return
        }
        signUp(email, password).then((userCreds) => {
            navigate('/login')

        }).catch((error) => {
            console.log(error.message)
        })
        console.log(email, password)
    }

    return (
        <div className="hero bg-compass-sand min-h-screen flex justify-center max-w-360 mx-auto ">
            <div className="hero-content flex-col gap-8">
                <div className='w-full flex justify-start'><button onClick={()=> navigate('/')} className='btn border bg-white border-compass-forest text-compass-forest hover:bg-compass-forest hover:text-white text-center w-full'><FaAngleLeft></FaAngleLeft> Back to Home</button></div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl py-8 border border-compass-forest">

                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-compass-forest">Sign-Up Now</h1>

                    </div>
                    <div className="card-body">
                        <form className='space-y-1.5 relative' onSubmit={handleSubmit} >
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <div className='absolute z-10 flex justify-end w-full items-center px-6 py-3.5'> <div onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</div> </div>
                            <input type={showPassword ? 'password' : 'text'} className="input" placeholder="Password" name='pass' required />
                            {
                                (error.length > 0) && error.map(errors => <div className='text-red-600'>{errors}</div>)
                            }

                            <button type='submit' className="btn btn-neutral mt-4 w-full text-center bg-compass-forest">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
