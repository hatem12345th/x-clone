import { News } from "@/app/components/News/News"
import { Sidebar } from "@/app/components/sidebar/Sidebar"


const Posts= () => {
  return (
    <div className=" flex justify-between w-full"> 
        <div>
        <Sidebar />

        </div>
       
       Posts Page
       <div>
       <News />
       </div>
        </div>
  )
}

export default Posts