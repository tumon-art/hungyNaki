import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import products from "../data/products";

const Foods: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);
  const [searchText, setsearchText] = useState<string>("");

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(indexOfLastPost, indexOfFirstPost, currentPosts);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="">
      <div className=" w-full h-40 md:h-48 z-[-1] overflow-hidden relative">
        <Image
          src="/allfoods.jpg"
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
      <div className=" md:mx-10 md:my-10">
        <input
          className=" py-2 pl-4 ring-2 ring-red-600 rounded-md"
          onChange={(e) => setsearchText(e.target.value.toLowerCase())}
          placeholder="Type to Search"
          type="text"
        />
      </div>
      <Products
        products={
          searchText.length > 0
            ? products.filter((e) => e.title.toLowerCase().includes(searchText))
            : currentPosts
        }
      />
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </section>
  );
};
export default Foods;
