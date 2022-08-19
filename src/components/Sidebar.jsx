const Sidebar = ({ toogelSidebar, sidebar }) => {
    return (
        <div className={`absolute h-[100vh] sidebar w-[100vw] z-10 top-0
         ${sidebar ? "translate-x-0" : " translate-x-[600px]"}`}>
            <div className="absolute   right-0 top-0 h-[100vh] w-full"
                onClick={toogelSidebar}>
            </div>
            <aside className={` ${sidebar && "translate-x-0"}
             right-0  translate-x-80 absolute transition-all 
            duration-300 top-0 h-[100vh] bg-red-700 w-2/4
            `}>

            </aside>
        </div>
    )
}
export default Sidebar
