import { list } from "../data/list";
import { useRouter } from "next/router";

const TopNav = () => {
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
            {e.name}
          </li>
        );
      })}
    </ol>
  );
};
export default TopNav;
