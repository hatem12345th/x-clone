

export const Topbar = () => {
  return (
    <div className="min-h-20 flex justify-between font-bold  rounded-[20px]  bg-[#0D0F10]   ">
            <h1 className="mt-5 px-5 text-3xl">   Logo-App  </h1>
  
            <div className=" px-10  flex items-center space-x-4">
            <img src="https://avatar.iran.liara.run/public/boy"   width={45}  />
              <span className="text-sm "> Admin  </span>
            </div>


    </div>
  )
}
