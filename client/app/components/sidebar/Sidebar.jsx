import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";


export const Sidebar = () => {
  return (
    <div className=" flex  gap-4 p-3 flex-col   ">
        <Link href={"/"}  >
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-[#131617] 
            rounded-full transition-all
        " />
        </Link>       

      <Link href={"/"} className="flex items-center p-3 hover:bg-[#131617] 
        rounded-full transition-all duration-200 gap-4 font-bold      
      "  >
      <HiHome className="w-10 h-10" />
      <span className="font-blod hidden xl:inline"> Home </span>

      </Link>  

    <button className=" hidden xl:inline bg-blue-500 hover:bg-blue-600 w-48 h-9 rounded-full text-xl shadow-lg shadow-[#131617] 
     text-white font-semibold "> Log in </button>



    </div>



  )
}
