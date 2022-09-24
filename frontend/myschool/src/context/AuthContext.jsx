import { useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";



const AuthContext    = createContext()

export default AuthContext

export const AuthProvider = ({children})=>{

const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
const [access, setCode] = useState(()=>localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null)
const [user, setUser]           = useState(()=>localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)

const navigate = useNavigate()



const adminLogout =()=>{
    setAuthToken(null)
    setUser(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('access_token')
    navigate('/')

}






const ContextData = {
    access:access,
    user:user,
    authToken:authToken,
    setUser:setUser,
    setCode:setCode,
    setAuthToken:setAuthToken,
    adminLogout:adminLogout,


    }


    return(
        <AuthContext.Provider   value={ContextData} >
                {children}
        </AuthContext.Provider>
    )
}