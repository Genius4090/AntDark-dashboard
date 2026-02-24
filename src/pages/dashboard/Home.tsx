import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Path } from "../../paths"

const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(Path.stacks)
  },[])
  return ""
}

export default Home