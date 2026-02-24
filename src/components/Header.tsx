import { LoginOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"
import { useState } from "react"
import { useCookies } from "react-cookie"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import { Path } from "../paths"


const Header = () => {
  const [logOutModal,setLogOutModal] = useState<boolean>(false)
  const [, , removeCookie] = useCookies(["token"])
  const [loading,setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  function handleLogOut(){
    setLoading(true)
    setTimeout(()=>{
      toast.success("Successfully logged out!")
      setLoading(false)
    },800)
    setTimeout(()=>{
      removeCookie("token")
      navigate(Path.home)
    },1400)
  }
  return (
    <div className="bg-[#0B0B0B] sticky top-0 w-full z-100 py-5 flex justify-between items-center  px-4 border-[#151B23] border-b">
       <h2 className="text-xl text-white  font-semibold tracking-wide">
          {location.pathname === Path.stacks && "Stacks"}
          {location.pathname === Path.groups && "Groups"}
          {location.pathname === Path.teachers && "Teachers"}
          {location.pathname === Path.students && "Students"}
          {location.pathname === Path.rooms && "Rooms"}
    

          {/* {matchProductDetail && "Product Details"} */}
          {/* {location.pathname === PATH.profile && "Profile"} */}
        </h2>
      <Button onClick={()=> setLogOutModal(true)} type="primary" size="large" iconPlacement="end" icon={<LoginOutlined />}>Log Out</Button>
      
      <Modal confirmLoading={loading} onOk={handleLogOut}  open={logOutModal} onCancel={()=> setLogOutModal(false)} okText={"confirm"} >
       <h2 className="text-lg  text-center py-2">Do you want to log out?</h2>
      </Modal>
    </div>
  )
}

export default Header