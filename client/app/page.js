import { News } from "./components/News/News";
import { Sidebar } from "./components/sidebar/Sidebar";


export default function Home() {
  
  return (
    <div className=" flex justify-between   max-w-6xl mx-auto "> 
     
    <div className="hidden  sm:inline border-r   h-screen">
    <Sidebar />

    </div>
    <div>
   
    </div>
    
   <div className="border-l      p-3 lg:flex-col h-screen  hidden lg:flex w-[24rem] ">
    <div className="sticky top-0 ">
    <input type="text" placeholder=" search " className=" bg-[#131617] sticky top-0 py-2 input-bordered w-full  rounded-2xl px-4  " />
    </div>
    <h1 className="px-4 text-2xl font-bold  rounded-xl space-y-9 "> Whats happening </h1>

   <News />
   </div>
    </div>
  );
}
