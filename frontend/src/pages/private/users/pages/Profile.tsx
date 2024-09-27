import { useEffect, useState } from "react"
import axios from "axios"
import Form from "../components/Form"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"


const Profile = () => {
    const[update,setUpdate]=useState(false)
    const[data,setData]=useState({})
    const id = useSelector((state:RootState)=>state.userId.value)
    const token = useSelector((state:RootState)=> state.token.value)
    
    useEffect(()=>{
        const getProfile=async ()=>{
            try{
                const response = await axios.get(`http://localhost:4000/home/userProfile/update/66f3c9e7da70f8fa31206f22`,{
                    headers:{
                        "authorization":`Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                
                console.log(response.status)
                if(response.status == 200){
                    setData(response.data)
                    setUpdate(true)
                }else{
                    setUpdate(false)
                }
            }catch(err){
                console.log(err)
            }

        }
        
        getProfile()
        
    },[id])

    console.log(id)

  return (
    <div>

        <Form update={update} data={data} />

    </div>
  )
}

export default Profile