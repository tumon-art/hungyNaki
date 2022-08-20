import FoodCategory from "../components/FoodCategory";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <section className=" flex justify-centerw-full mt-10 ">
        <Hero />
      </section>
      <section>
        <FoodCategory />
      </section>
    </div>
  );
}
