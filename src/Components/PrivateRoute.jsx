import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import { Navigate, useNavigate } from 'react-router'

export const PrivateRoute = ({children}) => {
    let navigate = useNavigate()
    let {user} = useContext(AuthContext)


    console.log(user)
    if (user){
        return children
    }
    else{

       return <Navigate to='/login'></Navigate>
    }
}
