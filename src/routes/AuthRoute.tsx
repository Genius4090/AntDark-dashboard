import {Routes,Route} from "react-router-dom"
import { Path } from "../paths"
import { Login, LoginHome, NotFound } from "../pages"


const AuthRoute = () => {
  return (
   <>
   <Routes>
   <Route path={Path.home} element={<LoginHome/>}/>
   <Route path={Path.login} element={<Login/>}/>
   <Route path={Path.notFound} element={<NotFound/>}/>
   </Routes>
   </>
  )
}

export default AuthRoute