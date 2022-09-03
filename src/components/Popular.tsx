import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import products from "../data/products";
import ShowItems from "./showItems/ShowItems";

const list = [
  { text: "All" },
  {
    text: "Burger",
    img: "/hamburger.png",
  },
  {
    text: "Pizza",
    img: "/pizza.png",
  },
  {
    text: "Bread",
    img: "/bread.png",
  },
];

const Popular = () => {
  const [Select, setSelect] = useState("All");
  const [sort, setsort] = useState("");

  const filterd = products.filter((products) => {
    if (sort == "") return products;
    if (sort == "All") return products;
    return products.category == sort;
  });

  return (
    <section className=" md:mx-20 sm:mx-14 mx-2">
      <div className=" font-rockNroll">
        <h1
          className=" text-slate-700 text-center 
             font-bold text-2xl"
        >
          Popular Foods
        </h1>

        <div className="   bg-primary rounded-md my-10">
          <ol
            className=" font-sans text-white text-xs py-4 font-medium flex 
                justify-center"
          >
            {list.map((e, i) => {
              return (
                <li
                  key={i}
                  className={` 
                  ${Select == e.text && " text-primary bg-white"}
                  cursor-pointer flex gap-2 items-center px-3 py-1 mx-3 
                  rounded-md hover:underline`}
                  onClick={() => {
                    setSelect(`${e.text}`);
                    setsort(e.text);
                  }}
                >
                  {e.text !== "All" && (
                    <Image
                      src={`${e.img}`}
                      height="20"
                      width="20"
                      alt="icodn"
                    />
                  )}

                  <span> {e.text} </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* === SHOW ALL FOOD */}
        <ShowItems products={filterd} />
      </div>
    </section>
  );
};
export default Popular;
