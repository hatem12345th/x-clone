import { DashHero } from "../components/dashborad/DashHero"
import { Topbar } from "../components/dashborad/Topbar"


const Admin = () => {
  return (
    <div className="h-screen overflow-auto bg-[#131619] ">
    
    <Topbar />
    <DashHero />
    
    </div>
  )
}

export default Admin