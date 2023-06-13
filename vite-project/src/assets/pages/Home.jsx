import { Landing } from "../components/landing/Landing";
import { NewCarousel } from "../components/landing/new-carousel/NewCarousel";
import { LandingBlog } from "../components/landing/blog/LandingBlog";
import { How } from "../components/landing/how/How";
import { AboutUs } from "../components/landing/about-us/AboutUs";

export function Home() {
  return (
    <div className="home-container">
      <Landing />
      <NewCarousel />
      <AboutUs/>
      <How />

      <LandingBlog />
    </div>
  );
}
