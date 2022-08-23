import Desc2 from "../components/Desc2";
import FoodCategory from "../components/FoodCategory";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HotPizza from "../components/HotPizza";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Testimonial from "../components/Testimonial";
import WhyHungry from "../components/WhyHungry";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FoodCategory />
      <Desc2 />
      <Popular />
      <WhyHungry />
      <HotPizza />
      <Testimonial />
      <Footer />
    </div>
  );
}
