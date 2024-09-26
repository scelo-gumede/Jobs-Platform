import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const PrivateRoutesLayouts = () => {
  const token=useSelector((state:RootState)=> state.token.value)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Or a loading indicator, if necessary
  }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRoutesLayouts