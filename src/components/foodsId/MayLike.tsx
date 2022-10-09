import { Products } from "../../@types";
import ShowItems from "../showItems/ShowItems";

const MayLike = ({ products }: { products: Products[] }) => {
  return (
    <div>
      <h1 className=" font-rockNroll font-bold text-xl">You may also like</h1>

      <div className=" font-medium">
        <ShowItems products={products} flex left />
      </div>
    </div>
  );
};
export default MayLike;
