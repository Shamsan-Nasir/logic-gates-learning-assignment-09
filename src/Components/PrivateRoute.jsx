import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import { Navigate, useNavigate } from 'react-router'

export const PrivateRoute = ({children}) => {
    let navigate = useNavigate()
    let {user,loading} = useContext(AuthContext)


    console.log(user)
    if (loading) {
        return <div>Loading...</div>
    }
    if (user){
        return children
    }
    else{

       return <Navigate to='/login'></Navigate>
    }
}
