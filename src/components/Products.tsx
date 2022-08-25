import { StaticImageData } from "next/image";

interface products {
  products: {
    id: string;
    title: string;
    price: number;
    image01: StaticImageData;
    image02: StaticImageData;
    image03: StaticImageData;
    category: string;

    desc: string;
  }[];
}

const Products = ({ products }: products) => {
  console.log(products);
  return <div></div>;
};
export default Products;
