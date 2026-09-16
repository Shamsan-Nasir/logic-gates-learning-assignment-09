import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router'


export const AuthContext = createContext(null)




export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState()
    let [loading, setLoading] = useState(true)

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email, password) {

        return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })

        return unsubscribe
    }, [])



    let authInfo = {
        user,
        loading,
        signUp,
        signIn,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    )
}
