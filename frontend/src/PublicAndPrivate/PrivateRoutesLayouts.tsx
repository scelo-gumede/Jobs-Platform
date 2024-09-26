import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setToken } from "../store/slices/tokenSlice";


const PrivateRoutesLayouts = () => {
  const token=useSelector((state:RootState)=> state.token.value)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = JSON.stringify(localStorage.getItem("token"))

    dispatch(setToken(token))

    
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