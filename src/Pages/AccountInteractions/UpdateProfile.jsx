import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../../Authentication/AuthProvider'
import { FaAngleLeft } from 'react-icons/fa6'

export const UpdateProfile = () => {

    const { user, UpdateProfile } = useContext(AuthContext)

    const navigate = useNavigate()
    let location = useLocation()

    const handleChange = (event) => {
        event.preventDefault()

        let name = event.target.name.value
        let photo = event.target.photo.value
        UpdateProfile(name, photo).then(() => {
            navigate('/profile')

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
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
                    <form className='space-y-2 flex flex-col' onSubmit={handleChange}>
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Enter Your NAme" name='name' required />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input w-full" placeholder="Enter Your photo url" name='photo' required />
                        <button type='submit' className="btn btn-neutral mt-4 w-full text-center bg-compass-forest">Update Profile</button>


                    </form>
                </div>
            </div>
        </div>
    </div>
)
}
