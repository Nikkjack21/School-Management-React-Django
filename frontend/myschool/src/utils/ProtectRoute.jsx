import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"



export const AdminProtectRoute=({children})=>{
        const {admin} = useContext(AuthContext)
        if (admin){
            return children
        }
        return <Navigate to='/' />
}