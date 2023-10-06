import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";



 export const AuthContext = createContext(null)

const Provider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            
        })
        return () => {
            unSubscribe()
        }
    },[])


    const userInfo = {
        user,
        loading,
        createUser,
        logOut,
        userLogin

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;

Provider.propTypes = {
    children:PropTypes.node
}