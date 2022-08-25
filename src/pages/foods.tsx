import Image from "next/image";
import { useState } from "react";
import Products from "../components/Products";
import products from "../data/products";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Foods = () => {
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [postsPerPage] = useState<number>(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost);

  console.log(indexOfLastPost, indexOfFirstPost, currentPosts);
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

      <Products products={products} />
    </section>
  );
};
export default Foods;
