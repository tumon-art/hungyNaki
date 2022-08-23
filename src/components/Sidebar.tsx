import { IoMdClose } from 'react-icons/io'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { list } from '../data/list'


const Sidebar = ({ toogelSidebar, sidebar }:any) => {

    useEffect(() => {
        if (sidebar === true) {
            document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
        } else document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }, [sidebar]);

    const router = useRouter()

    return (
        <div className={`absolute md:hidden h-[100vh] sidebar w-[100vw] z-10 top-0
         ${sidebar ? "translate-x-0" : " translate-x-[1000px]"}`}
        >
            <div className="absolute   right-0 top-0 h-[100vh] w-full"
                onClick={toogelSidebar}>
            </div>
            <aside
                className={` ${sidebar ? "translate-x-0" : "translate-x-80"}
                right-0  absolute transition-transform
                duration-200 top-0 bg-white h-[100vh]  w-2/4
                `}>
                <div className=" bg-red-50  flex items-center justify-center">
                    <IoMdClose
                        onClick={toogelSidebar}
                        className=' text-xl cursor-pointer  bg-red-600 rounded-full
                         my-4 ring-2 z-10 ring-red-600  text-white
                         ' />
                </div>

                <nav>
                    <ol className=' absolute left-0 right-0 m-auto list-none
                 flex flex-col top-0 bottom-0 items-center gap-10 justify-center
                 font-medium '>
                        {list.map((e, i) => {
                            return (
                                <li key={i}
                                    className={`${e.link == router.asPath && "text-red-500"}
                                     cursor-pointer hover:text-red-500`}>
                                    {e.name} </li>
                            )
                        })}
                    </ol>
                </nav>
            </aside>
        </div>
    )
}
export default Sidebar
