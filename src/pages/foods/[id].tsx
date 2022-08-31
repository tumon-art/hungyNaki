import Image from "next/image";
import { useRouter } from "next/router";
import Images from "../../components/foodsId/Images";
import { Products } from "../../components/Products";
import products from "../../data/products";

export default function FoodsId() {
  const router = useRouter();
  const pid = router.query.id;

  const item = products.filter((product) => product.id === pid);
  return (
    <>
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
         bg-blue-800 opacity-50 absolute"
        ></div>

        <span
          className=" flex items-center justify-center
           ml-14 md:ml-28 absolute top-0 bottom-0 my-auto font-rockNroll
         text-3xl font-extrabold md:text-4xl text-white"
        >
          {item[0].title}
        </span>
      </div>

      <div>
        <div>
          <Images
            images={{
              image01: item[0].image01,
              image02: item[0].image02,
              image03: item[0].image03,
            }}
          />
        </div>
      </div>
    </>
  );
}
