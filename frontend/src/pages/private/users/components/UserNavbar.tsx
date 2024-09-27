import { NavLink } from "react-router-dom"



interface UserNavBarProps{
    name :string,
    id:string
}


const UserNavbar = (props:UserNavBarProps) => {

  const handleLogOut = async()=>{
    try{
      localStorage.setItem("token","")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <nav className="bg-indigo-300 flex justify-around p-4 items-center">
        <p><NavLink to={`/home/${props.id}`}>Home</NavLink></p>

        <ul className="space-x-4 flex">
            <li className="border border-solid p-2 border-green-300">{props.name}</li>
            <li className="border border-solid p-2 border-green-300" >jobs applied</li>
            <li className="border border-solid p-2 border-green-300"><NavLink to={"profile"}>profile</NavLink></li>
            <li  className="border border-solid p-2 border-green-300" onClick={()=>handleLogOut()}>sign out</li>
        </ul>
    </nav>
  )
}

export default UserNavbar