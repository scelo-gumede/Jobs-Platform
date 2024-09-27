import { zodResolver } from "@hookform/resolvers/zod"
import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {z} from "zod"
import { setToken } from "../../store/slices/tokenSlice"
import { useDispatch, UseDispatch } from "react-redux"
import { jwtDecode } from "jwt-decode"

interface Jwt{
  userId:string,
  name:string
}

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  type Login ={
    email:string,
    password:string
  }

  const schema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
  })

  const{handleSubmit, register, formState:{errors}}=useForm<Login>({resolver:zodResolver(schema)})

  const submitData =async (data:Login)=>{

    try{
      const response = await axios.post("http://localhost:4000/auth/login",{...data})
      if(response.status == 200){
        dispatch(setToken(response.data.token))
        localStorage.setItem("token",response.data.token)
        const decoded=jwtDecode<Jwt>(response.data.token)
        

        console.log(decoded?.userId)
        navigate(`/home/${decoded.userId}`,{replace:true})
        
      }else{
        return
      }
    }catch(err){
      console.log(err)
    }

  }
  
  return (
    <div>

        <main style={{backgroundColor:"#28e51f"}} className="flex justify-center items-center h-screen w-screen">

            <form className="bg-white md:min-w-[50vw] p-6 shadow-sm rounded-lg flex flex-col space-y-4">
              <h2>Sign In</h2>
                <TextField {...register("email")} label="email" type="text" variant="standard" id="outlined-basic1" />
                {errors.email && <span>{errors.email.message}</span>}
                <TextField {...register("password")} label="password" type="password" variant="standard" id="outlined-basic2" />
                {errors.password && <span>{errors.password.message}</span>}
                <Button type="submit" variant="outlined" onClick={handleSubmit(submitData)}>login</Button>
            </form>
            
        </main>

    </div>
  )
}

export default Login