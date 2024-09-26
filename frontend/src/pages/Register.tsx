import { Button, TextField } from "@mui/material"
import {z} from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import axios from "axios"
import { useNavigate } from "react-router-dom"

type FormData={
    name:string,
    role:string,
    password:string,
    confirmPassword?:string,
    email:string
}

const Register = () => {
    const navigate = useNavigate()

    const schema = z.object({
        role: z.enum(["user","company"]),
        name: z.string().min(2).max(50),
        email: z.string().email(),
        password:z.string().min(6),
        confirmPassword:z.string().min(6)
        
    }).refine((data)=>data.password==data.confirmPassword,{
        message:"passwords do not match",
        path:["password"]
    })


    const {register ,handleSubmit,formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})

    const submitData =async(data:FormData)=>{
        delete data.confirmPassword
        
        try{
            const response = await axios.post("http://localhost:4000/auth/register",data)
            if(response.status == 201){
                navigate("/login",{replace:true})
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
        <form  className="bg-white p-6 md:min-w-[50vw] shadow-sm rounded-lg flex flex-col space-y-4">
            <h1 className="text-center text-lg font-bold">Register</h1>
            <TextField {...register("name")} variant="standard" type="text" id="outlined-basic1" label="name" />
            {errors.name && <span>{errors.name.message}</span>}
            <TextField {...register("role")} variant="standard" id="outlined-basic2" label="role" />
            {errors.role && <span>{errors.role.message}</span>}
            <TextField {...register("email")} variant="standard" id="outlined-basic3" label="email" />
            {errors.email && <span>{errors.email.message}</span>}
            <TextField {...register("password")} variant="standard" type="password" id="outlined-basic4" label="password" />
            {errors.password && <span>{errors.password.message}</span>}
            <TextField {...register("confirmPassword")} variant="standard" type="password" id="outlined-basic5" label="confirm password" />
            <Button variant="outlined" onClick={handleSubmit(submitData)} >register</Button>
        </form>
        </main>

    </div>
  )
}

export default Register