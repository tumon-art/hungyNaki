import { StaticImageData } from "next/image";

export interface Products {
  id: string;
  title: string;
  price: number;
  image01: StaticImageData;
  image02: StaticImageData;
  image03: StaticImageData;
  category: string;
  quantity: number;
  desc: string;
}
