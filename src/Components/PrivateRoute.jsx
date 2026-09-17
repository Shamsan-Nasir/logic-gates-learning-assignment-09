import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router'

export const PrivateRoute = ({children}) => {
    let navigate = useNavigate()
    let {user,loading} = useContext(AuthContext)
    let location = useLocation()


    console.log(user)
    if (loading) {
        return <div>Loading...</div>
    }
    if (user){
        return children
    }
    else{

       return <Navigate to='/login' state={location.pathname}></Navigate>
    }
}
