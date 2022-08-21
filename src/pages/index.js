import Desc2 from "../components/Desc2";
import FoodCategory from "../components/FoodCategory";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import WhyHungry from "../components/WhyHungry";

export default function Home() {
  return (
    <div>
      <Hero />
      <FoodCategory />
      <Desc2 />
      <Popular />
      <WhyHungry />
    </div>
  );
}
