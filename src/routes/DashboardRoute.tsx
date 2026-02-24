import { Route, Routes } from "react-router-dom"
import Groups from "../pages/dashboard/Groups"
import Home from "../pages/dashboard/Home"
import Rooms from "../pages/dashboard/Rooms"
import Stacks from "../pages/dashboard/Stacks/Stacks"
import Students from "../pages/dashboard/Students"
import Teachers from "../pages/dashboard/Teachers"
import { Path } from "../paths"
import { NotFound } from "../pages"
import { Header, Sidebar } from "../components"




const DashboardRoute = () => {

 const routeList = [
    { id: 1, path: Path.home, element: <Home/>},
    { id: 2, path: Path.stacks, element: <Stacks/>},
    { id: 3, path: Path.groups, element: <Groups/>},
    { id: 4, path: Path.teachers, element: <Teachers/>},
    { id: 5, path: Path.students, element: <Students/>},
    { id: 6, path: Path.rooms, element: <Rooms/>},
    { id: 7, path: Path.notFound, element: <NotFound/>},
    // { id: 7, path: Path.home, element: <Home/>},
    // { id: 8, path: Path.home, element: <Home/>},
    // { id: 9, path: Path.home, element: <Home/>},
 ]

  return (
    <div className="flex">
  <Sidebar/>
 <div className="bg-[#0B0B0B] w-full h-screen overflow-y-auto">
  <Header/>
 <Routes>{routeList.map(item=> <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>
 </div>
    </div>
  )
}

export default DashboardRoute