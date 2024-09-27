import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"

interface DataProps{
    cv?:string,
    jobExperience?:[string],
}

interface Props{
    update:boolean,
    data: DataProps
}


type schema={
    cv:string,
}


const Form = (props:Props) => {
    const[cv,setCv]=useState("")

    useEffect(()=>{


    },[])


  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <form className="flex flex-col space-y-4">
            
            <TextField variant="outlined" label="cv" value={cv} onChange={(e)=> setCv(e.target.value)}  type="text" />


            <Button variant="outlined" >{props.update ?<span>Update</span>:<span>create</span> }</Button>
        </form>
    </div>
  )
}

export default Form