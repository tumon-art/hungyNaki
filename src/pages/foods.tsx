import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import Pagination from "../components/Pagination";
import ShowItems from "../components/showItems/ShowItems";
import products from "../data/products";

const Foods: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);
  const [searchText, setsearchText] = useState<string>("");
  const [sort, setsort] = useState<string>("");

  // SORT LOW TO HIGH
  const lowToHigh = () =>
    products.sort(
      (a, b) => parseFloat(a.price.toString()) - parseFloat(b.price.toString())
    );

  // SORT HIGH TO LOW
  const highToLow = () =>
    products.sort(
      (a, b) => parseFloat(b.price.toString()) - parseFloat(a.price.toString())
    );

  // SELECT HANDLE
  const selectHandle = (e: any) => {
    const value = e.target.value;

    // SET STATES
    if (value == "lowToHigh") setsort("lowToHigh");
    if (value == "highToLow") setsort("highToLow");
  };

  // CALL SORT FUNCTIONS
  if (sort == "lowToHigh") lowToHigh();
  if (sort == "highToLow") highToLow();

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="">
      <div className=" w-full h-28 md:h-48 z-[-1] overflow-hidden relative">
        <Image
          src="/allfoods.webp"
          height="15"
          width="100"
          layout="fill"
          alt="allfoods"
          className=" relative object-cover"
        />
        <div
          className=" w-[100vw] h-[100vh]
          bg-blue-800 opacity-40 absolute"
        ></div>

        <span
          className=" flex items-center justify-center
           ml-14 md:ml-28 absolute top-0 bottom-0 my-auto font-rockNroll
         text-3xl font-extrabold md:text-4xl text-white"
        >
          All Food{" "}
        </span>
      </div>

      <div className=" md:mx-32">
        <div className=" flex flex-col items-center gap-y-4  mt-6">
          <div className=" lg:w-3/6">
            <div
              className=" flex rounded-sm px-4 ring-2
        justify-between ring-gray-200 items-center"
            >
              <input
                className=" outline-none py-1 md:py-2 rounded-md
                placeholder:text-sm md:placeholder:text-base
                "
                onChange={(e) => setsearchText(e.target.value.toLowerCase())}
                placeholder="Type to Search"
                type="text"
              />
              <RiSearchLine className=" text-gray-500 text-base md:text-xl" />
            </div>
          </div>

          <div>
            <select
              className={` md:py-1 outline-none ring-2 ring-gray-300 focus:ring-2
       focus:ring-zinc-400 text-sm bg-zinc-200 text-zinc-800
      rounded-sm`}
              defaultValue=""
              onChange={selectHandle}
            >
              <option disabled value="">
                Sort Foods
              </option>
              <option value={"lowToHigh"}> Low To High </option>
              <option value={"highToLow"}> High To Low </option>
            </select>
          </div>
        </div>

        <ShowItems
          products={
            searchText.length > 0
              ? products.filter((e) =>
                e.title.toLowerCase().includes(searchText)
              )
              : currentPosts
          }
          flex
        />
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
};
export default Foods;
