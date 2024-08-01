import { CiCalendar } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";
import {  TableDemo } from "./Table"


export const DashHero = () => {
  return (
    <div className="px-[68px] h-[80px] mt-5">
        <h1 className="text-[36px] font-[700px] "> Welcome,Admin  </h1>
        <span className="text-[#ABB8C4]"> start day with managing new appointments </span>
        <div className="  Items mt-10 flex justify-between ">
            <div className="item shadow-xl shadow-[#0D0F10]">
                <span className=" px-5 flex"> <CiCalendar className="text-yellow-500 text-5xl  ml-1 mr-2  "  /> <p className="text-3xl mt-2">32</p>   </span> 
                <span className="w-[352px] p-5 py-2 h-[20px] mt-1 text-sm    "> Scheduled appointments</span>
            </div>
            <div className="item shadow-xl shadow-[#0D0F10]">
            <span className=" px-5 flex"> <CgSandClock className="text-blue-500 text-5xl  ml-1 mr-2  "  /> <p className="text-3xl mt-2">32</p>   </span> 

            <span className="w-[352px]  p-5 py-2 h-[20px] mt-1 text-sm "> Pending appointments</span>

            </div>
            <div className="item shadow-xl shadow-[#0D0F10]">
            <span className=" px-5 flex"> <CiWarning className="text-red-500 text-5xl  ml-1 mr-2  "  /> <p className="text-3xl mt-2">32</p>   </span> 

            <span className="w-[352px]  p-5 py-2 h-[20px] mt-1 text-sm"> Cancelled appointments</span>

            </div>
        </div>


        <TableDemo  />




    </div>
  )
}
