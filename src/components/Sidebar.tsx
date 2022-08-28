import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { list } from "../data/list";
import Link from "next/link";
import useStore from "../store/mainStore";

const Sidebar = () => {
  const { sidebarSwitch, sidebar } = useStore();

  useEffect(() => {
    if (sidebar === true) {
      document.getElementsByTagName<any>("BODY")[0].style.overflow = "hidden";
    } else
      document.getElementsByTagName<any>("BODY")[0].style.overflow = "auto";
  }, [sidebar]);

  const router = useRouter();

  return (
    <div
      className={`absolute md:hidden h-[100vh] sidebar w-[100vw] z-10 top-0
         ${sidebar ? "translate-x-0" : " translate-x-[1000px]"}`}
    >
      <div
        className="absolute   right-0 top-0 h-[100vh] w-full"
        onClick={sidebarSwitch}
      ></div>
      <div
        className=" absolute right-40 bg-rose-200 opacity-40 
      h-full blur-3xl w-3/6 md:w-2/6"
      ></div>
      <aside
        className={` ${sidebar ? "translate-x-0" : "translate-x-80"}
                right-0  absolute transition-transform
                duration-200 top-0 bg-white h-[100vh]  w-2/4
                `}
      >
        <div className=" bg-red-50  flex items-center justify-center">
          <IoMdClose
            onClick={sidebarSwitch}
            className=" text-xl cursor-pointer  bg-red-600 rounded-full
                         my-4 ring-2 z-10 ring-red-600  text-white
                         "
          />
        </div>

        <nav>
          <ol
            className=" absolute left-0 right-0 m-auto list-none
                 flex flex-col top-0 bottom-0 items-center gap-10 justify-center
                 font-medium "
          >
            {list.map((e, i) => {
              return (
                <li
                  onClick={sidebarSwitch}
                  key={i}
                  className={`${e.link == router.asPath && "text-red-500"}
                                     cursor-pointer hover:text-red-500`}
                >
                  <Link href={e.link}>
                    <a>{e.name}</a>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </aside>
    </div>
  );
};
export default Sidebar;
