import Image from "next/image";
import { useRouter } from "next/router";
import Desc from "../../components/foodsId/Desc";
import FoodNav from "../../components/foodsId/FoodNav";
import Images from "../../components/foodsId/Images";
import { Products } from "../../components/Products";
import products from "../../data/products";

export default function FoodsId({ item }: { item: Products }) {
  return (
    <>
      <div className=" w-full h-28 md:h-48 z-[-1] overflow-hidden relative">
        <Image
          src="/allfoods.webp"
          layout="fill"
          alt="allfoods"
          className=" relative object-cover"
        />
        <div
          className=" w-[100vw] h-[100vh]
         bg-blue-800 opacity-50 absolute"
        ></div>

        <span
          className=" flex items-center justify-center
           ml-14 md:ml-28 absolute top-0 bottom-0 my-auto font-rockNroll
         text-3xl font-extrabold md:text-4xl text-white"
        >
          {item.title}
        </span>
      </div>
      <div className=" md:flex md:ml-32">
        <div>
          <Images
            images={{
              image01: item.image01,
              image02: item.image02,
              image03: item.image03,
            }}
          />
        </div>

        <FoodNav item={item} />
      </div>
      {/* === DESCRIPTTION REVIEW */}
      <Desc item={item} />
    </>
  );
}

export const getStaticPaths = async () => {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  const paths: any = arr.map((e) => {
    return {
      params: {
        id: e,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const filtered = products.filter((product) => product.id === params.id);
  const item = filtered[0];
  return {
    props: { item },
  };
};
