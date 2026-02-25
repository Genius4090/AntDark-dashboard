import {  LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import { Topbar } from "../../../components"
import { useQuery } from "@tanstack/react-query"
import { debounce, instance } from "../../../hooks"
import { useCookies } from "react-cookie"
import type { StackType } from "../../../@types"
import { Card, Input } from "antd"
import { Link } from "react-router-dom"
import { useState } from "react"

const Stacks = () => {
  const [cookie] = useCookies(["token"])

  //Search
  const [searchInp,setSearchInp] = useState<string>("")
  const name = debounce(searchInp,1000)

  
   const {data:stacks = [],isLoading} = useQuery<StackType[]>({
    queryKey: ["stacks",name],
    staleTime: 10 * 60 * 1000,
    queryFn:() => instance().get("/stacks",{
      headers: {
        Authorization: `Bearer ${cookie.token}`
      },
      params: {
        name
      }
    }).then(res => res.data.data)
   })



  return (
    <div>
       <Topbar count={stacks.length} title="Stacks" icon={<PlusOutlined />} />
    <div className="flex flex-col container py-10 gap-8">
    <Input onChange={(e)=> setSearchInp(e.target.value)} className="w-[280px]! py-1.5! bg-[#1C1C1C]! border-[#383838]!  text-white!" placeholder="Search stacks..." size="large" allowClear variant="filled" />
    
    <div className="flex flew-wrap gap-6 items-center justify-center">
    {isLoading ? <LoadingOutlined /> : stacks.map(item =>
        <Card key={item.id} title={item.name} extra={<Link to={`${item.id}`}>More</Link>} style={{ width: 300 }} className="bg-[#151515]! text-white! border-[#383838]!">
        <p>{item.description}</p>
      </Card>
    )}
    </div>
    </div>
   
    </div>
  )
}

export default Stacks




