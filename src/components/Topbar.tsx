import { Button } from "antd"
import type { FC, ReactNode } from "react"

interface TopbarType {
  title: string,
  count: number,
  icon: ReactNode
}

const Topbar:FC<TopbarType> = ({title,count,icon}) => {
  return (
    <div className=" text-white flex justify-between items-center px-4 border-b border-[#151B23] py-3">
      <div className="flex gap-1">
      <h2>{title}</h2>
      <p>({count})</p>
      </div>
      <Button icon={icon} iconPlacement="end" type="primary" size="large">Create</Button>
    </div>
  )
}

export default Topbar