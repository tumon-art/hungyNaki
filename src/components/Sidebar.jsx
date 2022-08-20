import { IoMdClose } from 'react-icons/io'





const Sidebar = ({ toogelSidebar, sidebar }) => {
    return (
        <div className={`absolute ring-8 h-[100vh] sidebar w-[100vw] z-10 top-0
         ${sidebar ? "translate-x-0" : " translate-x-[700px]"}`}>
            <div className="absolute   right-0 top-0 h-[100vh] w-full"
                onClick={toogelSidebar}>
            </div>
            <aside className={` ${sidebar ? "translate-x-0" : "translate-x-80"}
             right-0  absolute transition-all 
            duration-300 top-0 bg-white h-[100vh]  w-2/4
            `}>
                <div className="flex justify-center">
                    <IoMdClose className=' text-2xl bg-red-600 rounded-full
                     my-4 ring-2 ring-red-600  text-white
                     hover:scale-125 transition-transform' />
                </div>
            </aside>
        </div>
    )
}
export default Sidebar
