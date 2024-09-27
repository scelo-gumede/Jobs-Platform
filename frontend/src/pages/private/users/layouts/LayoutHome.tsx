import UserNavbar from "../components/UserNavbar"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store"
import  {jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { setId } from "../../../../store/slices/userIdSlice"
import { UseDispatch } from "react-redux"


interface Jwt{
    name?:string,
    userId?:string
}

const Layout = () => {
    const token = useSelector((state:RootState)=> state.token.value)
    const[userName,setUserName]=useState("")
    const[userId,setUserId]=useState("")
    const dispatch =useDispatch()

    useEffect(() => {
        const getName = async (tok: string) => {
          try {
            const decoded: Jwt = jwtDecode<Jwt>(tok); // Decode the token
            return decoded
          } catch (error) {
            console.error("Failed to decode token:", error);
            return {};
          }
        };
        
        
        // Call the async function
        const fetchUsername = async () => {
          if (token) {
            const {name ,userId} = await getName(token);
            setUserName(name ? name : "");
            setUserId(userId ? userId : "")
            dispatch(setId(userId ? userId : ""))
          }
        };
    
        fetchUsername();
      }, [token]); // Added token as a dependency

  return (
    <div>
       <UserNavbar name={userName} id={userId} />

       <main>
        <Outlet />
        
        </main>
    </div>
  )
}

export default Layout