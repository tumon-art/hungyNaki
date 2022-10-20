import Head from "next/head";
import { useEffect } from "react";
import Desc2 from "../components/Desc2";
import FoodCategory from "../components/FoodCategory";
import Hero from "../components/Hero";
import HotPizza from "../components/HotPizza";
import Popular from "../components/Popular";
import Testimonial from "../components/Testimonial";
import WhyHungry from "../components/WhyHungry";

export default function Home() {
  useEffect(() => {
    // on Android Chrome

    window.matchMedia("(display-mode: standalone)").matches;
  }, []);

  function openFullscreen() {
    document.documentElement.requestFullscreen();
    // if (elem.requestFullscreen) {
    //   elem.requestFullscreen();
    // } else if (elem.requestFullscreen) {
    //   /* Safari */
    //   elem.requestFullscreen();
    // } else if (elem.requestFullscreen) {
    //   /* IE11 */
    //   elem.requestFullscreen();
    // }
  }

  return (
    <div>
      <Head>
        <title> HungryNaki</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width; viewport-fit=cover"
        />
      </Head>
      <h1 onClick={openFullscreen}> Hello</h1>
      <Hero />
      <FoodCategory />
      <Desc2 />
      <Popular />
      <WhyHungry />

      <HotPizza />
      <Testimonial />
    </div>
  );
}
