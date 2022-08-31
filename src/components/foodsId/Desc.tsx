import { Products } from "../Products";

const Desc = ({ item }: { item: Products }) => {
  return (
    <div className=" mx-4 my-10">
      <div className=" mb flex gap-10">
        <h2 className=" font-rockNroll  text-lg ">Description</h2>
        <h2 className=" font-rockNroll  text-lg text-red-600">Review</h2>
      </div>
      <hr></hr>

      <div>
        <p className=" my-5 tracking-wide text-zinc-500 text-[13px] leading-6 ">
          {item.desc}
        </p>
      </div>
    </div>
  );
};
export default Desc;
