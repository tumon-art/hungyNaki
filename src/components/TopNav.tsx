import { list } from "../data/list";
import { useRouter } from "next/router";
import useStore from "../store/mainStore";
import Link from "next/link";

const TopNav = () => {
  // const sidebarSwitch = useStore((state: any) => state.sidebarSwitch);
  const router = useRouter();

  return (
    <ol className=" md:flex items-center gap-8 font-medium hidden ">
      {list.map((e, i) => {
        return (
          <li
            key={i}
            className={`${
              e.link == router.asPath &&
              " border-b-2 border-red-600 text-red-600"
            }
                    cursor-pointer hover:text-red-500`}
          >
            <Link href={e.link}>
              <a>{e.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
export default TopNav;
