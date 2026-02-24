import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Path } from "../../paths"

const LoginHome = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(Path.login)
  },[])
  return ""
}

export default LoginHome