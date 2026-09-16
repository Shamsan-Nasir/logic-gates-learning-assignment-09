import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router'


export const AuthContext = createContext(null)



export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState()
    let [loading,setLoading] = useState(true) 

    function signUp(email, password) {


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log(userCredential)
                console.log(userCredential.user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    function signIn(email, password) {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               return <Navigate to='/Login'></Navigate>
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
         console.log(currentUser)   
        })

        return unsubscribe
    },[])
    
    useEffect(() => {
        console.log('user is :',user)
    },[user])

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
